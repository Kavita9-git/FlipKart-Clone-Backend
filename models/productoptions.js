export const productOptions = {
  properties: {
    color: {
      isArray: true,
      availableValues: [
        { value: 'Red', label: 'Red' },
        { value: 'Black', label: 'Black' },
        { value: 'Blue', label: 'Blue' },
        { value: 'Green', label: 'Green' },
        { value: 'White', label: 'White' },
      ],
    },
    size: {
      isArray: true,
      availableValues: [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
      ],
    },
  },
};
