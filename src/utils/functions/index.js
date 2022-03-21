export const verfPrecision = precision => {
  if (precision.toLowerCase() === 'kg') {
    return 1;
  } else if (precision.toLowerCase() === 'und') {
    return 0;
  }
};

export const verfStep = step => {
  if (step.toLowerCase() === 'kg') {
    return 0.1;
  } else if (step.toLowerCase() === 'und') {
    return 1;
  }
};
