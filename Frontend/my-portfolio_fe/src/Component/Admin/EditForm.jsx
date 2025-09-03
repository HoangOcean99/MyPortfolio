import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function EditForm({ project, onSave, addOrEdit }) {
    const [formData, setFormData] = useState({
        // Skill
        skillImg: project?.skillImg || "",
        skillName: project?.skillName || "",
        skillGroup: project?.skillGroup || "",

        // Project
        title: project?.title || "",
        desc: project?.desc || "",
        img: project?.img || "",
        stack: project?.stack || [],
        features: project?.features || [""],
        role: project?.role || "",
        team: project?.team || "",
        time: project?.time || "",
        responsibilities: project?.responsibilities || [""],
        demo: project?.demo || "",
        github: project?.github || "",
        achievements: project?.achievements || [""],

        // Certification
        certImg: project?.certImg || "",
        certLink: project?.certLink || ""
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
        if (addOrEdit === 'skill') {
            dataSave = {
                skillImg: formData.skillImg,
                skillName: formData.skillName,
                skillGroup: formData.skillGroup,
            }
        }
        else if (addOrEdit === 'project') {
            dataSave = {
                title: formData.title,
                desc: formData.desc,
                img: formData.img,
                stack: formData.stack,
                features: formData.features,
                role: formData.role,
                team: formData.team,
                time: formData.time,
                responsibilities: formData.responsibilities,
                demo: formData.title,
                github: formData.github,
                achievements: formData.achievements,
            }
        }
        else {
            dataSave = {
                certImg: formData.certImg,
                certLink: formData.certLink,
            }
        }
        e.preventDefault();
        onSave(dataSave);
    };

    const handleImage = (e, name) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, [name]: url }))
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            {/* -------- Skill Form -------- */}
            {addOrEdit === 'skill' && (
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Skill Image URL</Form.Label>
                            <Form.Control
                                type="file"
                                name="skillImg"
                                accept="image/*"
                                onChange={(e) => handleImage(e, 'skillImg')}
                            />
                            <span style={{
                                display: 'inline',
                                width: '100px',
                                fontSize: '12px'
                            }}>{formData.skillImg}</span>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Skill Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="skillName"
                                value={formData.skillName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Skill Group</Form.Label>
                            <Form.Control
                                type="text"
                                name="skillGroup"
                                value={formData.skillGroup}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            )}

            {/* -------- Project Form -------- */}
            {addOrEdit === 'project' && (
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
                                    onChange={(e) => handleImage(e, 'img')}
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
                                <Form.Label>Stack (comma separated)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="stack"
                                    value={formData.stack.join(", ")}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            stack: e.target.value.split(",").map((s) => s.trim())
                                        }))
                                    }
                                />
                            </Form.Group>
                        </Col>
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
                    </Row>

                    {/* Features */}
                    <Form.Label>Features</Form.Label>
                    {formData.features.map((f, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={f}
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
                    </Button>


                    {/* Responsibilities */}
                    <Form.Label className="mt-3">Responsibilities</Form.Label>
                    {formData.responsibilities.map((r, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={r}
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
                    </Button>

                    {/* Achievements */}
                    <Form.Label className="mt-3">Achievements</Form.Label>
                    {formData.achievements.map((a, idx) => (
                        <div key={idx} className="d-flex mb-2 gap-2">
                            <Form.Control
                                type="text"
                                value={a}
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
                    </Button>


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
            {addOrEdit === 'cert' && (
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Certificate Image URL</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                name="certImg"
                                onChange={(e) => handleImage(e, 'certImg')}
                            />
                            <span style={{
                                display: 'inline',
                                width: '100px',
                                fontSize: '12px'
                            }}>{formData.certImg}</span>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
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
