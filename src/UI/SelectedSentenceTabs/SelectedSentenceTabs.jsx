import { useEffect, useState } from 'react';
import './SelectedSentenceTabs.css';

const SelectedSentenceTabs = (props) => {
  const tabs = ['All Sentences', 'Selected Sntences'];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBtnDisabled, setSelectedBtnDisabled] = useState(!props.hasSelectedSentence);

  useEffect(() => {
    setSelectedBtnDisabled(props.hasSelectedSentence);
  }, [props.hasSelectedSentence]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    props.handelSelectedTab();
  };

  return (
    <div className="selected_sentence_tabs">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            disabled={!props.hasSelectedSentence /* selectedBtnDisabled */}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* <div className="tab-content">{tabs.find((tab) => tab.id === activeTab).content}</div> */}
    </div>
  );
};

export default SelectedSentenceTabs;
