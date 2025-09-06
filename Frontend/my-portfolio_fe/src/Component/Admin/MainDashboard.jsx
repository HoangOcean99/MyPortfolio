import { useEffect, useState } from "react";
import { Button, Card, Tabs, Tab, Modal, Form } from "react-bootstrap";
import EditForm from "./EditForm"; // form edit/add
import './MainDashboard.css'
import { useNavigate } from "react-router-dom";
import { signout } from "../../Api/authApi";
import { editGeneralSecure, getGeneralSecure } from "../../Api/GeneralApi";
import { addProjectSecure, deleteProjectSecure, editProjectSecure, getProjectSecure } from "../../Api/ProjectApi";
import { addSkillSecure, deleteSkillSecure, editSkillSecure, getSkillSecure } from "../../Api/SkillApi";
import { addCertSecure, deleteCertSecure, editCertiSecure, getCertiSecure } from "../../Api/CertificationApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const [skills, setSkills] = useState([]);

    const [projects, setProjects] = useState([]);

    const [certs, setCerts] = useState([]);
    const fetchInfor = async () => {
        const responseGeneral = await getGeneralSecure();
        setUser(responseGeneral.data[0]);
    }
    const fetchProject = async () => {
        const responseProject = await getProjectSecure();
        setProjects(responseProject.data);
    }
    const fetchSkill = async () => {
        const responseSkill = await getSkillSecure();
        setSkills(responseSkill.data);
    }
    const fetchCertification = async () => {
        const responseCert = await getCertiSecure();
        setCerts(responseCert.data);
    }
    useEffect(() => {
        const fetchAll = async () => {
            await fetchInfor();
            await fetchSkill();
            await fetchProject();
            await fetchCertification();
        };

        fetchAll();
    }, []);


    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [adding, setAdding] = useState(null);

    const handleGeneralInformation = async () => {
        try {
            await editGeneralSecure(
                user.linkCV,
                user.yearCoding,
                user.projectFinished,
                user.GPA
            );
        } catch (error) {
            toast.error(`Có lỗi xảy ra khi ${editing ? "cập nhật" : "thêm"} ${type}`);
        } finally {
            toast.success(`Cập nhật thành công!`);
            await fetchInfor();
        }


    }
    const handleSave = async (type, data) => {
        try {
            if (editing) {
                if (type === "skill") {
                    await editSkillSecure({
                        index: skills[editing.index].id,
                        file: data.fileSkill,
                        name: data.nameSkill,
                        type: data.typeSkill,
                        group: data.groupSkill,
                    });
                    await fetchSkill();
                }
                if (type === "project") {
                    await editProjectSecure({
                        index: projects[editing.index].id,
                        title: data.title,
                        desc: data.desc,
                        file: data.fileProject,
                        role: data.role,
                        team: data.team,
                        time: data.role,
                        demo: data.demo,
                        github: data.github,
                        type: data.groupProject,
                        stacks: data.ProjectStacks,
                        respons: data.ProjectResponsibilities,
                        achieve: data.ProjectAchievements,
                        feats: data.ProjectFeatures
                    });
                    await fetchProject();
                }
                if (type === "cert") {
                    await editCertiSecure({
                        index: certs[editing.index].idCert,
                        title: data.certTitle,
                        file: data.certFile,
                        link: data.certLink
                    });
                    await fetchCertification();
                }
                toast.success(`Cập nhật ${type} thành công!`);
            } else if (adding) {
                if (type === "skill") {
                    await addSkillSecure({
                        file: data.fileSkill,
                        name: data.nameSkill,
                        type: data.typeSkill,
                        group: data.groupSkill,
                    });
                    await fetchSkill();
                }
                if (type === "project") {
                    await addProjectSecure({
                        title: data.title,
                        desc: data.desc,
                        file: data.fileProject,
                        role: data.role,
                        team: data.team,
                        time: data.role,
                        demo: data.demo,
                        github: data.github,
                        type: data.groupProject,
                        stacks: data.ProjectStacks,
                        respons: data.ProjectResponsibilities,
                        achieve: data.ProjectAchievements,
                        feats: data.ProjectFeatures
                    });
                    await fetchProject();
                }
                if (type === "cert") {
                    await addCertSecure({
                        title: data.certTitle,
                        file: data.certFile,
                        link: data.certLink
                    });
                    await fetchCertification();
                }
                toast.success(`Thêm ${type} thành công!`);
            }
        } catch (error) {
            toast.error(`Có lỗi xảy ra khi ${editing ? "cập nhật" : "thêm"} ${type}`);
        } finally {
            setEditing(null);
            setAdding(null);
            setShowForm(false);
        }
    };


    const handleDelete = async (type, index) => {
        try {
            if (type === "skill") {
                await deleteSkillSecure(skills[index].id);
                await fetchSkill();
            }
            if (type === "project") {
                await deleteProjectSecure(projects[index].id);
                await fetchProject();
            }
            if (type === "cert") {
                await deleteCertSecure(certs[index].idCert);
                await fetchCertification();
            }
        } catch (error) {
            toast.error(`Có lỗi xảy ra khi xóa`);
        } finally {
            toast.success('Xóa thành công!')
        }

    };

    const handleLogout = async () => {
        const response = await signout();
        localStorage.removeItem('isLogin');
        navigate('/');
    }

    return (
        <div className="p-4 contain-dashboard">
            <div className="w-100 text-start ps-4">
                <button className="btn btn-primary" onClick={() => handleLogout()}>Home</button>
            </div>

            <h3 className="mt-4">General Information</h3>
            <Card className="p-4 shadow-sm mb-5 contain-gene">
                {user && <div className="row g-3">
                    <div className="col-md-4">
                        <Form.Group>
                            <Form.Label><strong>✅ Projects Finished</strong></Form.Label>
                            <Form.Control
                                type="number"
                                value={user.projectFinished}
                                onChange={(e) => setUser({ ...user, projectFinished: e.target.value })}
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-4">
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

                    <div className="col-md-4">
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
                </div>}

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
                        {skills.length > 0 && skills.map((s, i) => (
                            <Card key={i} className="p-3 mb-2 shadow-sm col-md-3 col-12 m-md-5 m-3 ">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={s.image} alt={s.nameSkill} width={40} />
                                    <div>
                                        <h6>{s.nameSkill}</h6>
                                        <small>{s.typeSkill}</small>
                                    </div>
                                    <p>Group: {s.groupSkill}</p>
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
                        {(projects.length > 0) && projects.map((p, i) => (
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
                                        <div className="col-md-4 pt-3 pt-md-0 text-start ms-md-5 pe-md-3">
                                            <h5>{p.title}</h5>
                                            <p className="text-muted">{p.desc}</p>
                                            <p><strong>Stack:</strong>
                                                {p.ProjectStacks.map((p1, i) => {
                                                    if (i != p.ProjectStacks.length - 1) {
                                                        return (
                                                            <span> {p1.stacks}, </span>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <span> {p1.stacks} </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                            <p><strong>Role:</strong> {p.role}</p>
                                            <p><strong>Team size:</strong> {p.team}</p>
                                            <p><strong>Timeline:</strong> {p.time}</p>

                                            <p><strong>Features:</strong></p>
                                            <ul>
                                                {p.ProjectFeatures.map((f, idx) => <li key={idx}>{f.features}</li>)}
                                            </ul>
                                        </div>
                                        <div className="col-4 text-start">
                                            <p><strong>Responsibilities:</strong></p>
                                            <ul>
                                                {p.ProjectResponsibilities.map((r, idx) => <li key={idx}>{r.responsibilities}</li>)}
                                            </ul>

                                            <p><strong>Achievements:</strong></p>
                                            <ul>
                                                {p.ProjectAchievements.map((a, idx) => <li key={idx}>{a.achievements}</li>)}
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
                        {certs.length > 0 && certs.map((c, i) => (
                            <Card key={i} className="p-3 mb-2 shadow-sm col-md-2 col-4 text-center">
                                <h6>{c.title}</h6>
                                <img src={c.image} alt="cert" width={120} className="m-auto" />
                                <a href={c.link} target="_blank" rel="noreferrer">View Certificate</a>
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
                        addOrEditType={(adding?.type) || (editing?.type)}
                        addOrEdit={adding ? 'add' : 'edit'}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: '999' }}
            />
        </div >
    );
}
