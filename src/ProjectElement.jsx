export function ProjectElement({
  name,
  description,
  imgSrc,
  opposite,
  live,
  code,
}) {
  return (
    <div
      className={`my-10 md:my-0 relative w-fit ${opposite ? "ml-auto" : ""} `}
    >
      <img src={imgSrc} style={{ width: "500px" }} />
      <div
        className={`absolute  right-0 top-1/2 ${
          opposite ? "md:mr-96" : "md:-mr-96"
        }  md:mt-0 mt-72 transform -translate-y-1/2 bg-base-300  md:w-full px-5 md:px-20 py-4 rounded-sm`}
      >
        <h3 className="text-2xl font-marlinge text-primary py-2">{name}</h3>
        <p className="text-base">{description}</p>
        <div className="flex gap-5 my-4">
          <a
            target="_blank"
            href={code}
            className="btn btn-primary rounded-none"
          >
            Ver código
          </a>
          <a
            target="_blank"
            href={live}
            className="btn btn-outline rounded-none"
          >
            Ver ao vivo
          </a>
        </div>
      </div>
    </div>
  );
}
