import { useState } from "react";
import { Button, Card, Tabs, Tab, Modal, Form } from "react-bootstrap";
import EditForm from "./EditForm"; // form edit/add
import './MainDashboard.css'
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        linkCV: 'temp',
        projectFinished: 10,
        yearCoding: 2,
        GPA: 3.5,
    });

    const [skills, setSkills] = useState([
        { skillImg: '/images/AnhMyself.jpg', skillName: "React", skillGroup: "Frontend" },
        { skillImg: '/images/AnhMyself.jpg', skillName: "Node.js", skillGroup: "Backend" },
        { skillImg: '/images/AnhMyself.jpg', skillName: "Node.js", skillGroup: "Backend" },
    ]);

    const [projects, setProjects] = useState([
        {
            title: "Portfolio Website",
            desc: "Trang web cá nhân giới thiệu bản thân.",
            img: '/images/AnhMyself.jpg',
            stack: ["React", "Bootstrap"],
            features: ["Hiển thị CV", "Gửi contact form"],
            role: "Fullstack Developer",
            team: "1",
            time: "2023",
            responsibilities: ["Code UI", "Kết nối API"],
            demo: "https://my-portfolio.com",
            github: "https://github.com/my-portfolio",
            achievements: ["Hoàn thành trong 2 tuần", "Responsive"],
        },
        {
            title: "Portfolio Website",
            desc: "Trang web cá nhân giới thiệu bản thân.",
            img: '/images/AnhMyself.jpg',
            stack: ["React", "Bootstrap"],
            features: ["Hiển thị CV", "Gửi contact form"],
            role: "Fullstack Developer",
            team: "1",
            time: "2023",
            responsibilities: ["Code UI", "Kết nối API"],
            demo: "https://my-portfolio.com",
            github: "https://github.com/my-portfolio",
            achievements: ["Hoàn thành trong 2 tuần", "Responsive"],
        },
    ]);

    const [certs, setCerts] = useState([
        { certImg: '/images/AnhMyself.jpg', certLink: "https://coursera.org/certificate/12345" },
        { certImg: '/images/AnhMyself.jpg', certLink: "https://coursera.org/certificate/12345" },
        { certImg: '/images/AnhMyself.jpg', certLink: "https://coursera.org/certificate/12345" },
        { certImg: '/images/AnhMyself.jpg', certLink: "https://coursera.org/certificate/12345" },
    ]);

    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [adding, setAdding] = useState(null);

    const handleGeneralInformation = () => {
        console.log(user);
    }
    const handleSave = (type, data) => {
        if (editing) {
            const updated = [...(type === "skill" ? skills : type === "project" ? projects : certs)];
            updated[editing.index] = data;
            if (type === "skill") setSkills(updated);
            if (type === "project") setProjects(updated);
            if (type === "cert") setCerts(updated);
        } else {
            if (type === "skill") setSkills((prev) => [...prev, data]);
            if (type === "project") setProjects((prev) => [...prev, data]);
            if (type === "cert") setCerts((prev) => [...prev, data]);
        }
        setEditing(null);
        setShowForm(false);
    };

    const handleDelete = (type, index) => {
        if (type === "skill") setSkills((prev) => prev.filter((_, i) => i !== index));
        if (type === "project") setProjects((prev) => prev.filter((_, i) => i !== index));
        if (type === "cert") setCerts((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4 contain-dashboard">
            <div className="w-100 text-start ps-4">
                <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
            </div>

            <h3 className="mt-4">General Information</h3>
            <Card className="p-4 shadow-sm mb-5 contain-gene">
                <div className="row g-3">
                    <div className="col-md-6">
                        <Form.Group>
                            <Form.Label><strong>📄 CV Link</strong></Form.Label>
                            <Form.Control
                                type="text"
                                value={user.linkCV}
                                onChange={(e) => setUser({ ...user, linkCV: e.target.value })}
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group>
                            <Form.Label><strong>✅ Projects Finished</strong></Form.Label>
                            <Form.Control
                                type="number"
                                value={user.projectFinished}
                                onChange={(e) => setUser({ ...user, projectFinished: e.target.value })}
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group>
                            <Form.Label><strong>💻 Years Coding</strong></Form.Label>
                            <Form.Control
                                type="number"
                                step="1"
                                value={user.yearCoding}
                                onChange={(e) => setUser({ ...user, yearCoding: e.target.value })}
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group>
                            <Form.Label><strong>📊 GPA</strong></Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                value={user.GPA}
                                onChange={(e) => setUser({ ...user, GPA: e.target.value })}
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <Button variant="primary" onClick={() => handleGeneralInformation()}>Save</Button>
                </div>
            </Card>
            <h3>Admin Dashboard</h3>

            <Tabs defaultActiveKey="skills" className="mb-3 custom-tabs">
                {/* Skills */}
                <Tab
                    eventKey="skills"
                    title={
                        <span>
                            🛠 Skills
                            <br />
                            <small>Công nghệ đã học</small>
                        </span>
                    }
                >
                    <div className="row g-2">
                        {skills.map((s, i) => (
                            <Card key={i} className="p-3 mb-2 shadow-sm col-md-3 col-12 m-md-5 m-3 ">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={s.skillImg} alt={s.skillName} width={40} />
                                    <div>
                                        <h6>{s.skillName}</h6>
                                        <small>{s.skillGroup}</small>
                                    </div>
                                </div>
                                <div className="mt-2 d-flex gap-2">
                                    <Button size="sm" variant="warning" onClick={() => { setEditing({ type: "skill", index: i }); setShowForm(true); setAdding(null); }}>Edit</Button>
                                    <Button size="sm" variant="danger" onClick={() => handleDelete("skill", i)}>Delete</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <Button className="mt-3" variant="success" onClick={() => { setEditing(null); setShowForm(true); setAdding({ type: "skill" }); }}>+ Add Skill</Button>
                </Tab>

                {/* Projects */}
                <Tab
                    eventKey="projects"
                    title={
                        <span>
                            📂 Projects
                            <br />
                            <small>Dự án đã làm</small>
                        </span>
                    }
                >
                    <div className="row">
                        {projects.map((p, i) => (
                            <div key={i} className="col-md-12 col-12 mb-4">
                                <Card className="h-100 shadow-sm">
                                    <div className="row g-0 align-items-center p-3">
                                        {/* Ảnh */}
                                        <div className="col-md-3">
                                            <img
                                                src={p.img}
                                                alt={p.title}
                                                className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                                                style={{ minHeight: "200px" }}
                                            />
                                        </div>

                                        {/* Nội dung */}
                                        <div className="col-md-4 pt-3 pt-md-0 text-start ms-md-5">
                                            <h5>{p.title}</h5>
                                            <p className="text-muted">{p.desc}</p>

                                            <p><strong>Stack:</strong> {p.stack.join(", ")}</p>
                                            <p><strong>Role:</strong> {p.role}</p>
                                            <p><strong>Team size:</strong> {p.team}</p>
                                            <p><strong>Timeline:</strong> {p.time}</p>

                                            <p><strong>Features:</strong></p>
                                            <ul>
                                                {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
                                            </ul>
                                        </div>
                                        <div className="col-4 text-start">
                                            <p><strong>Responsibilities:</strong></p>
                                            <ul>
                                                {p.responsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
                                            </ul>

                                            <p><strong>Achievements:</strong></p>
                                            <ul>
                                                {p.achievements.map((a, idx) => <li key={idx}>{a}</li>)}
                                            </ul>

                                            <div className="d-flex gap-3 mt-2">
                                                <a href={p.demo} target="_blank" rel="noreferrer">🌐 Demo</a>
                                                <a href={p.github} target="_blank" rel="noreferrer">💻 GitHub</a>
                                            </div>

                                            <div className="mt-3 d-flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="warning"
                                                    onClick={() => { setEditing({ type: "project", index: i }); setShowForm(true); setAdding(null); }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    onClick={() => handleDelete("project", i)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <Button variant="success" onClick={() => { setEditing(null); setShowForm(true); setAdding({ type: "project" }); }}>+ Add Project</Button>
                </Tab>

                {/* Certifications */}
                <Tab
                    eventKey="certs"
                    title={
                        <span>
                            🎓 Certifications
                            <br />
                            <small>Chứng chỉ đạt được</small>
                        </span>
                    }
                >
                    <div className="row">
                        {certs.map((c, i) => (
                            <Card key={i} className="p-3 mb-2 shadow-sm col-md-2 col-4 text-center">
                                <img src={c.certImg} alt="cert" width={120} className="m-auto" />
                                <a href={c.certLink} target="_blank" rel="noreferrer">View Certificate</a>
                                <div className="mt-2 d-flex gap-2 m-auto">
                                    <Button size="sm" variant="warning" onClick={() => { setEditing({ type: "cert", index: i }); setShowForm(true); setAdding(null); }}>Edit</Button>
                                    <Button size="sm" variant="danger" onClick={() => handleDelete("cert", i)}>Delete</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <Button variant="success" onClick={() => { setEditing(null); setShowForm(true); setAdding({ type: "cert" }); }}>+ Add Certification</Button>
                </Tab>
            </Tabs>

            {/* Modal chứa form */}
            <Modal show={showForm} onHide={() => setShowForm(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editing ? `Edit ${editing.type}` : "Add New"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm
                        project={editing ? (
                            editing.type === "skill" ? skills[editing.index] :
                                editing.type === "project" ? projects[editing.index] :
                                    certs[editing.index]
                        ) : null}
                        onSave={(data) => handleSave(editing?.type || adding?.type || "project", data)}
                        addOrEdit={(adding?.type) || (editing?.type)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
