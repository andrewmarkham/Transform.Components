import PropTypes from "prop-types";

export const treeviewNodeType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    parentId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    expanded: PropTypes.bool
})

export const treeviewNodeArrayType = PropTypes.arrayOf(treeviewNodeType);

export const treeviewNodeDictionaryType = PropTypes.objectOf(treeviewNodeArrayType)
