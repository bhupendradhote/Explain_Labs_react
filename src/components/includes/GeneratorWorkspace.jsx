import React, { useState } from "react";
import "./GeneratorWorkspace.css";
          import { FaChevronDown, FaDownload } from "react-icons/fa";
          import {
  FaVideo,
  FaFilePowerpoint,
  FaCode,
  FaTable,
  FaBookOpen
} from "react-icons/fa";
const tabIcons = {
  "Video Generation": <FaVideo />,
  "PPT Generation": <FaFilePowerpoint />,
  "Code Explanation": <FaCode />,
  "Sheets to Infographic": <FaTable />,
  "Text Book Explanation": <FaBookOpen />
};


const generatorTabs = [
  "Video Generation",
  "PPT Generation",
  "Code Explanation",
  "Sheets to Infographic",
  "Text Book Explanation",
];



const GeneratorWorkspace = () => {
  const [currentTab, setCurrentTab] = useState("Video Generation");
  const [promptText, setPromptText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("File ready:", file.name);
    }
  };

  return (
    <div className="main-interface-shell">
      {/* Navigation Tabs */}
   <div className="category-tab-row">
  {generatorTabs.map((name) => (
    <button
      key={name}
      className={`category-btn ${currentTab === name ? "is-active" : ""}`}
      onClick={() => setCurrentTab(name)}
    >
      <span className="tab-icon">
        {tabIcons[name]}
      </span>
      <span className="tab-label">
        {name}
      </span>
    </button>
  ))}
</div>


      {/* Primary Workspace */}
      <div className="workspace-container">

      <div className="workspace-grid">
        
        {/* Input Panel */}
        <div className="action-surface left-side">
          <textarea
            className="text-input-field"
            placeholder={`In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically]  Not the “burn it all down” kind... [giggles]  but he was gentle, wise, with eyes like old stars. [whispers]  Even the birds fell silent when he passed.`}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          />
          <div className="surface-controls">
            <div className="language-select-wrapper">
              <select
                className="language-dropdown"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>

            </div>
            <div>
            <button className="execute-btn">
              ▶ {currentTab}
            </button>
            <button
              type="button"
              className="icon-btn download-btn"
              title="Download"
              onClick={() => {
                /* Optional: implement download here. Leaving empty will not change behavior. */
              }}
            >
              <FaDownload />
            </button>
            </div>

          </div>

        </div>

        {/* Upload Panel */}
        <div className="action-surface right-side">
          <h3 className="panel-title">Upload Document</h3>

          <label className="file-drop-area">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={onFileChange}
              hidden
            />
            <div className="drop-area-content">
              <span className="file-type-icon">📄</span>
              <p className="upload-label">
                {selectedFile ? selectedFile.name : "Drag & Drop PDF or DOCX"}
              </p>
              <small className="upload-constraint">Limit: 50MB per file</small>
            </div>
          </label>

          <button className="execute-btn full-width">
            ▶ {currentTab} 
          </button>
        </div>

      </div>

      {/* Attribution Footer */}
      <div className="shell-attribution">
        Powered by <strong>Eleven v3 (alpha)</strong>
      </div>
    </div>
    </div>

  );
};

export default GeneratorWorkspace;