import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function EditForm({ project, onSave, addOrEditType }) {
    const [formData, setFormData] = useState({
        // Skill
        image: project?.image || "",
        fileSkill: {},
        nameSkill: project?.nameSkill || "",
        groupSkill: project?.groupSkill || "",
        typeSkill: project?.typeSkill || "",

        // Project
        title: project?.title || "",
        desc: project?.desc || "",
        img: project?.img || "",
        fileProject: {},
        stack: project?.ProjectStacks || [""],
        features: project?.ProjectFeatures || [""],
        role: project?.role || "",
        team: project?.team || "",
        time: project?.time || "",
        responsibilities: project?.ProjectResponsibilities || [""],
        demo: project?.demo || "",
        github: project?.github || "",
        achievements: project?.ProjectAchievements || [""],
        groupProject: project?.type,

        // Certification
        certTitle: project?.title || "",
        certImg: project?.image || "",
        certFile: {},
        certLink: project?.link || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (name, index, value) => {
        const updated = [...formData[name]];
        updated[index] = value;
        setFormData((prev) => ({ ...prev, [name]: updated }));
    };

    const addArrayField = (name) => {
        setFormData((prev) => ({ ...prev, [name]: [...prev[name], ""] }));
    };

    const handleSubmit = (e) => {
        let dataSave = null;
        if (addOrEditType === 'skill') {
            dataSave = {
                image: formData.image,
                nameSkill: formData.nameSkill,
                groupSkill: formData.groupSkill,
                typeSkill: formData.typeSkill,
                fileSkill: formData.fileSkill,
            }
        }
        else if (addOrEditType === 'project') {
            dataSave = {
                title: formData.title,
                desc: formData.desc,
                img: formData.img,
                ProjectStacks: formData.stack,
                ProjectFeatures: formData.features,
                role: formData.role,
                team: formData.team,
                time: formData.time,
                ProjectResponsibilities: formData.responsibilities,
                demo: formData.title,
                github: formData.github,
                ProjectAchievements: formData.achievements,
                fileProject: formData.fileProject,
                groupProject: formData.groupProject,
            }
        }
        else {
            dataSave = {
                certTitle: formData.certTitle,
                certImg: formData.certImg,
                certLink: formData.certLink,
                certFile: formData.certFile,
            }
        }
        e.preventDefault();
        onSave(dataSave);
    };

    const handleImage = (e, name, fileName) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, [name]: url }))
            setFormData((prev) => ({ ...prev, [fileName]: file }))
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            {/* -------- Skill Form -------- */}
            {addOrEditType === 'skill' && (
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Skill Image URL</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => handleImage(e, 'image', 'fileSkill')}
                            />
                        </Form.Group>
                        <span style={{
                            display: 'inline-block',
                            width: '100%',
                            fontSize: '10px',
                        }}>{formData.image}</span>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Skill Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nameSkill"
                                value={formData.nameSkill}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Skill type</Form.Label>
                            <Form.Control
                                type="text"
                                name="typeSkill"
                                value={formData.typeSkill}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Skill group</Form.Label>
                            <Form.Select
                                name="groupSkill"
                                value={formData.groupSkill}
                                onChange={handleChange}
                            >
                                <option value="">-- Chọn nhóm kỹ năng --</option>
                                <option value='1'>Technical Skills</option>
                                <option value="2">Tools</option>
                                <option value="3">Soft Skills</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            )}

            {/* -------- Project Form -------- */}
            {addOrEditType === 'project' && (
                <>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImage(e, 'img', 'fileProject')}
                                />
                                <span style={{
                                    display: 'inline',
                                    width: '100px',
                                    fontSize: '12px'
                                }}>{formData.img}</span>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label>Team</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="team"
                                    value={formData.team}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label>Timeline</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <Form.Select
                                    name="groupProject"
                                    value={formData.groupProject}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Select group of project --</option>
                                    <option value='1'>Web app</option>
                                    <option value="2">Cross-platform app</option>
                                    <option value="3">Game</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Stack */}
                    <Form.Label>Stacks</Form.Label>
                    {formData.stack.map((s, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={s.stacks}
                                onChange={(e) => handleArrayChange("stack", idx, e.target.value)}
                            />
                            <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        stacks: prev.stacks.filter((_, i) => i !== idx),
                                    }))
                                }
                            >
                                ❌
                            </Button>
                        </div>
                    ))}
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => addArrayField("stack")}
                    >
                        + Add Stack
                    </Button><br /><br />

                    {/* Features */}
                    <Form.Label>Features</Form.Label>
                    {formData.features.map((f, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={f.features}
                                onChange={(e) => handleArrayChange("features", idx, e.target.value)}
                            />
                            <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        features: prev.features.filter((_, i) => i !== idx),
                                    }))
                                }
                            >
                                ❌
                            </Button>
                        </div>
                    ))}
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => addArrayField("features")}
                    >
                        + Add Feature
                    </Button><br /><br />


                    {/* Responsibilities */}
                    <Form.Label className="mt-3">Responsibilities</Form.Label>
                    {formData.responsibilities.map((r, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={r.responsibilities}
                                onChange={(e) => handleArrayChange("responsibilities", idx, e.target.value)}
                            />
                            <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        responsibilities: prev.responsibilities.filter((_, i) => i !== idx),
                                    }))
                                }
                            >
                                ❌
                            </Button>
                        </div>
                    ))}
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => addArrayField("responsibilities")}
                    >
                        + Add Responsibility
                    </Button><br /><br />

                    {/* Achievements */}
                    <Form.Label className="mt-3">Achievements</Form.Label>
                    {formData.achievements.map((a, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={a.achievements}
                                onChange={(e) => handleArrayChange("achievements", idx, e.target.value)}
                            />
                            <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        achievements: prev.achievements.filter((_, i) => i !== idx),
                                    }))
                                }
                            >
                                ❌
                            </Button>
                        </div>
                    ))}
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => addArrayField("achievements")}
                    >
                        + Add Achievement
                    </Button><br /><br />


                    <Row className="mt-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Demo Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="demo"
                                    value={formData.demo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>GitHub Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </>
            )}

            {/* -------- Certification Form -------- */}
            {addOrEditType === 'cert' && (
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Certificate TitleL</Form.Label>
                            <Form.Control
                                type="text"
                                name="certTitle"
                                value={formData.certTitle}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Certificate Image URL</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                name="certImg"
                                onChange={(e) => handleImage(e, 'certImg', 'certFile')}
                            />
                            <span style={{
                                display: 'inline',
                                width: '100px',
                                fontSize: '12px'
                            }}>{formData.certImg}</span>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Certificate Link</Form.Label>
                            <Form.Control
                                type="text"
                                name="certLink"
                                value={formData.certLink}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            )}

            <div className="text-end mt-3">
                <Button type="submit" variant="primary">
                    Save Changes
                </Button>
            </div>
        </Form>
    );
}
