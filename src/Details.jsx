import "./Details.css"
let data =
    {
    name: "Massachusetts Institute of Technology",
    sat: 1540,
    ielts: 7,
    acc: 3,
    tuition: "57,986",
    location: "Massachusetts, USA",
    ranking: 3,
    gpa: 3.5,
    img: "/mit.png",
    description:
      "“Mind and Hand” is the thought-provoking motto of the Massachusetts Institute of Technology, known also as MIT. This motto enigmatically encapsulates this famous institution’s mission to advance knowledge in science, technology and areas of scholarship that can help to make the world a better place. \n At its founding in 1861, MIT was initially a small community of problem-solvers and science lovers eager to bring their knowledge to bear on the world. Today, MIT has evolved into an educational behemoth, with some 1,000 faculty members and more than 11,000 undergraduate and graduate students. ",
  }
function Details() {
    return (
        <div className="details-container px-60">
        <div className="overview-div">
            <img src={data.img} alt={`${data.img} logo`} />
            <div><strong>Name: </strong> {data.name}</div>
            <div><strong>Location:</strong> {data.location}</div>
            <div><strong>Tuition:</strong> {data.tuition}</div>
            <div><strong>Ranking:</strong> {data.ranking}</div>
            <div><strong>GPA:</strong> {data.gpa}</div>
            <div className="description-box">
                <strong>Description:</strong>
                <p>{data.description}</p>
            </div>
        </div>
    </div>
    )
}

export default Details;

