import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import "../../MainContent/MainContent.css";
import type { SkillMapProps} from "../../../../types.ts";

function SkillMap({ data } : SkillMapProps) {
    //   const [zoomedId, setZoomedId] = useState<string | null>(null);

    
      return (
        <>
            {data.children && data.children.length > 0 ? 
            <div className="chart-div">
                <ResponsiveCirclePacking
                data={data}
                // colors={node => {
                //     if (node.depth === 0) return "transparent"; // root node
                //     if (node.depth === 1) return "#f1e15b"; // skills
                //     if (node.depth === 2) return "#e8a838"; // goals
                //     return "#61cdbb"; // actions
                // }}
                colors={{ scheme: 'pastel2' }}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                padding={4}
                enableLabels={true}
                labelsFilter={event => event.node.depth > 0} 
                labelsSkipRadius={10}
                borderWidth={1}
                onMouseEnter={node => console.log(node)} // check wat nivo voor object structuur geeft
                tooltip={({ data }) => <p>{data.name}</p>}
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