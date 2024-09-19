export function HardSkillElement({ imgSrc, name }) {
  return (
    <div className="flex flex-col gap-5 items-center mx-auto">
      <img
        src={imgSrc}
        className="hover:scale-110 transition-all duration-300"
        style={{ height: "100px", borderRadius: "25%"}}
      ></img>
      <span className="mt-auto">{name}</span>
    </div>
  );
}
