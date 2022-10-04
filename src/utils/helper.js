export const showText = (data, threshold) => {
  return data.start <= threshold && data.end >= threshold;
};
