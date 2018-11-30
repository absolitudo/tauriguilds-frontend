import React from "react";

import { mapInstanceToPicture } from "./helpers";

function Progression(props) {
    let progression = [];

    for (let instance in props.progression) {
        let obj = { ...props.progression[instance], instanceName: instance };
        progression.push(obj);
    }

    return (
        <section className="progression">
            {progression.map((instance, index) => {
                return <Instance instance={instance} key={index} />;
            })}
        </section>
    );
}

function Instance(props) {
    let picture = mapInstanceToPicture(props.instance.instanceName);

    return (
        <div className="progression-instance-container">
            <div
                className="progression-instance"
                style={{
                    background: "url(" + picture + ")"
                }}
            >
                {props.instance.abbreviation}
            </div>
        </div>
    );
}

export default Progression;
