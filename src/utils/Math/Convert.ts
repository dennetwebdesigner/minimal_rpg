export const convertFor = ({ min, max }: { min: number; max: number }) => {
  return (min * 100) / max;
};
