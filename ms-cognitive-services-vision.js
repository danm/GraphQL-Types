const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLFloat,
} = require('graphql');

const faceRectangleType = new GraphQLObjectType({
  name: 'faceRectangleType',
  fields: {
    top: {
      type: GraphQLInt,
    },
    left: {
      type: GraphQLInt,
    },
    width: {
      type: GraphQLInt,
    },
    height: {
      type: GraphQLInt,
    },
  },
});

const CategoriesDetailCelebritiesType = new GraphQLObjectType({
  name: 'CategoriesDetailCelebritiesType',
  fields: {
    faceRectangle: {
      type: faceRectangleType,
    },
    name: {
      type: GraphQLString,
    },
    confidence: {
      type: GraphQLFloat,
    },
  },
});

const CategoriesDetailType = new GraphQLObjectType({
  name: 'CategoriesDetailType',
  fields: {
    celebrities: {
      type: new GraphQLList(CategoriesDetailCelebritiesType),
    },
  },
});

const CategoriesType = new GraphQLObjectType({
  name: 'CategoriesType',
  fields: {
    name: {
      type: GraphQLString,
    },
    score: {
      type: GraphQLFloat,
    },
    detail: {
      type: CategoriesDetailType,
    },
  },
});

const TagsType = new GraphQLObjectType({
  name: 'tagType',
  fields: {
    name: {
      type: GraphQLString,
    },
    confidence: {
      type: GraphQLFloat,
    },
  },
});

const CaptionsType = new GraphQLObjectType({
  name: 'CaptionsType',
  fields: {
    text: {
      type: GraphQLString,
    },
    confidence: {
      type: GraphQLFloat,
    },
  },
});

const FacesType = new GraphQLObjectType({
  name: 'FacesType',
  fields: {
    faceRectangle: {
      type: faceRectangleType,
    },
    age: {
      type: GraphQLInt,
    },
    gender: {
      type: GraphQLString,
    },
  },
});

const MetaType = new GraphQLObjectType({
  name: 'MetaType',
  fields: {
    height: {
      type: GraphQLInt,
    },
    width: {
      type: GraphQLInt,
    },
    format: {
      type: GraphQLString,
    },
  },
});

const DescriptionType = new GraphQLObjectType({
  name: 'DescriptionType',
  fields: {
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    captions: {
      type: new GraphQLList(CaptionsType),
    },
  },
});

module.exports = new GraphQLObjectType({
  name: 'CognitiveServicesType',
  fields: {
    categories: {
      type: new GraphQLList(CategoriesType),
    },
    tags: {
      type: new GraphQLList(TagsType),
    },
    faces: {
      type: new GraphQLList(FacesType),
    },
    metadata: {
      type: MetaType,
    },
    description: {
      type: DescriptionType,
    },
    requestId: {
      type: GraphQLString,
    },
  },
});

