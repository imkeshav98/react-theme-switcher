export const Body = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          width: "350px",
          height: "350px",
          objectFit: "cover",
        }}
        src="https://cdn.dribbble.com/users/948184/screenshots/3895912/squid2.gif"
        alt="image"
      />
    </div>
  );
};
