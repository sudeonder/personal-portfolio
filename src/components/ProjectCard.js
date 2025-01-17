import { Col } from "react-bootstrap";

export const ProjectCard = ({ size, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={4} md={size}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
