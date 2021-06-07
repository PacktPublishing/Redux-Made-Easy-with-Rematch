import PROP_TYPES_SECRET from "prop-types/lib/ReactPropTypesSecret";

function validate(typeSpecs, stateValues, modelName) {
  for (const key in typeSpecs) {
    if (typeSpecs[key]) {
      const error = typeSpecs[key](
        stateValues,
        key,
        modelName,
        "property",
        null,
        PROP_TYPES_SECRET
      );

      if (error instanceof Error) {
        console.warn(`[Rematch]: ${error.message}`);
      }
    }
  }
}

const TYPINGS_CACHE = {};
function createTypedStatePlugin() {
  return {
    exposed: {
      typings: {},
    },
    onModel: (model) => {
      TYPINGS_CACHE[model.name] = model.typings
    },
    createMiddleware: () => () => (next) => (action) => {
      const { type, payload } = action
      const [modelName] = type.split("/");
      const typings = TYPINGS_CACHE[modelName];

      if (typings) {
        validate(typings, payload, modelName);
      }

      return next(action);
    },
  }
};

export default createTypedStatePlugin
