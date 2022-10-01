export const Lights = () => {
  return (
    <>
      <spotLight position={[-350, 600, 200]} intensity={3} />
      <ambientLight intensity={0.85} />
    </>
  );
};
