import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis officia, illum ipsam reprehenderit vitae doloribus doloremque consequatur expedita molestias. Architecto quidem possimus, necessitatibus neque saepe ipsum laboriosam vero ad.</p>
                </div>
                <div className="card-action gray lighten-4 gray-text">
                    <div>Posted by Abraham Tesfay</div>
                    <div>25th Oct, 2019</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails

