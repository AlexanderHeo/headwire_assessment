import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { TeamData } from '../lib/images';
import '../stylesheets/Team.css';

const Team = () => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const handleTeamModal = (e) => {
    const name = e.currentTarget.dataset.name.split(' ');
    const first = name[0];
    const last = name[1];
    const info = TeamData.filter((mate) => {
      return mate.first_name === first && mate.last_name === last;
    });
    setModalInfo(info);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalInfo([]);
    setModalOpen(false);
  };

  const modalClass = modalOpen ? 'modal-wrapper' : 'modal-wrapper hide';
  const teamImagesClass = modalOpen ? 'team-images paused' : 'team-images';

  return (
    <div id='team'>
      {modalOpen && (
        <div className={`${modalClass} pos-abs flx-cnt w100 h100`}>
          <div className='modal-close'>
            <AiOutlineClose
              className='modal-close'
              size='2rem'
              onClick={() => closeModal()}
            />
          </div>
          <div className='modal-container flx-cnt w100 h100'>
            <div className='modal-img'>
              <img
                src={modalInfo[0].imgSource}
                alt={modalInfo[0].altText}
                className='modal-img'
              />
            </div>
            <div className='modal-data flx-cnt-col'>
              <div>
                {modalInfo[0].first_name} {modalInfo[0].last_name}
              </div>
              <div>{modalInfo[0].job_title}</div>
              <div>
                <ImQuotesLeft className='quotes-left' size='2rem' />
                {modalInfo[0].description}
                <ImQuotesRight className='quotes-right' size='2rem' />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='title-container flx-cnt-col'>
        <div className='over-title upper'>Our professionals</div>
        <div className='title cap'>Meet our skilled Team</div>
      </div>
      <div className='team-carousel'>
        <div className={teamImagesClass}>
          {TeamData.map((mate, index) => {
            return (
              <div className='team-image' key={index}>
                <div className='team-overlay flx-cnt-col pos-abs w100 h100'>
                  <div className='team-name-container flx-cnt-col h100'>
                    <div className='team-name'>
                      {TeamData[index].first_name} {TeamData[index].last_name}
                    </div>
                    <FiPlus
                      className='team-plus'
                      size='2rem'
                      data-name={`${TeamData[index].first_name} ${TeamData[index].last_name}`}
                      onClick={(e) => handleTeamModal(e)}
                    />
                  </div>
                  <div className='team-title-container'>
                    <div className='team-title upper'>
                      {TeamData[index].job_title}
                    </div>
                  </div>
                </div>
                <div className='team-img-container'>
                  <img
                    src={TeamData[index].imgSource}
                    alt={TeamData[index].altText}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
