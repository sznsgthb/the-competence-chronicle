// import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing'
// import { CirclePacking } from '@nivo/circle-packing'

function SkillMap({ data }) {
    //   const [zoomedId, setZoomedId] = useState<string | null>(null);

    
      return (
        <>
            {data.children && data.children.length > 0 ? 
            <div className="chart-div">
                <ResponsiveCirclePacking
                data={data}
                colors={node => {
                    if (node.depth === 0) return "transparent"; // root node
                    if (node.depth === 1) return "#f4a261"; // skills
                    if (node.depth === 2) return "#2a9d8f"; // goals
                    return "#e9c46a"; // actions
                }}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                padding={4}
                enableLabels={true}
                labelsFilter={e => e.node.depth > 0} 
                labelsSkipRadius={10}
                borderWidth={1}
            /></div>
        
        :
        <div className="placeholder-div">
            <p>Enter a skill first to display the data.</p>
        </div>
        }
    </>
    )
}

export default SkillMap;