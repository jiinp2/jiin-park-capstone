import { Images, MapPinned, Users } from "lucide-react";
import "./Guide.scss";

function Guide() {
  return (
    <section className="guide">
      <h2>How It Works</h2>
      <div className="guide__steps-container">
        <div className="guide__step-wrapper">
          <Images />
          <h3>Upload Your Photos</h3>
          <p>
            Add your travel photos, and we'll automatically extract location
            data.
          </p>
        </div>
        <div className="guide__step-wrapper">
          <MapPinned />
          <h3>Visualize Your Journey</h3>
          <p>View your trip on an interactive map.</p>
        </div>
        <div className="guide__step-wrapper">
          <Users />
          <h3>Save & Share</h3>
          <p>Keep your log private or share it to inspire others</p>
        </div>
      </div>
    </section>
  );
}

export default Guide;
