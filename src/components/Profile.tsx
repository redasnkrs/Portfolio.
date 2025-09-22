function handleClick() {
  alert("Hello");
}

export function Profile() {
  return (
    <section id="profil" className="">
      <div className="d-flex justify-items-end">
        <img
          className="text-xl text-[rgb(250,0,0)]  bg-[rgb(45,45,45)] w-20 h-20 rounded-4xl"
          alt="profi-pic"
          src="src/assets/test.jpg"
          onClick={handleClick}
        />
      </div>
    </section>
  );
}
