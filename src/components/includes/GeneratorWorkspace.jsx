import React, { useState, useEffect, useRef } from "react";
import "./GeneratorWorkspace.css";
import { 
  FaChevronDown, 
  FaDownload,
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

// Data for languages with Flag Icons
const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'hi', name: 'Hindi', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/w40/es.png' }
];

const GeneratorWorkspace = () => {
  const [currentTab, setCurrentTab] = useState("Video Generation");
  const [promptText, setPromptText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // --- New Dropdown State ---
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <span className="tab-icon">{tabIcons[name]}</span>
            <span className="tab-label">{name}</span>
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
              placeholder={`In the ancient land of Eldoria...`}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
            />
            <div className="surface-controls">
              
              {/* --- CUSTOM DROPDOWN SECTION --- */}
              <div className="language-select-wrapper" ref={dropdownRef}>
                <div 
                  className={`custom-dropdown-trigger ${isLangOpen ? 'open' : ''}`} 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <div className="selected-lang-content">
                    <img 
                      src={selectedLang.flag} 
                      alt={selectedLang.name} 
                      className="lang-flag" 
                    />
                    <span>{selectedLang.name}</span>
                  </div>
                  <FaChevronDown className={`dropdown-arrow ${isLangOpen ? 'rotated' : ''}`} />
                </div>

                {/* Dropdown Options with Smooth Animation */}
                <div className={`custom-dropdown-options ${isLangOpen ? 'show' : ''}`}>
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`dropdown-option ${selectedLang.code === lang.code ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                    >
                      <img src={lang.flag} alt={lang.name} className="lang-flag" />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* ------------------------------- */}

              <div>
                <button className="execute-btn">
                  ▶ {currentTab}
                </button>
                <button
                  type="button"
                  className="icon-btn download-btn"
                  title="Download"
                  onClick={() => {}}
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