import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { TeamData } from '../lib/images';
import '../stylesheets/Team.css';

const Team = () => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const button1 = () => setIndex(0);
  const button2 = () => setIndex(1);
  const button3 = () => setIndex(2);
  const button4 = () => setIndex(3);

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
  const tccBorder1 = index === 0 ? 'tcc-border active' : 'tcc-border';
  const tccBorder2 = index === 1 ? 'tcc-border active' : 'tcc-border';
  const tccBorder3 = index === 2 ? 'tcc-border active' : 'tcc-border';
  const tccBorder4 = index === 3 ? 'tcc-border active' : 'tcc-border';

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
        <div className='over-title'>Our professionals</div>
        <div className='title'>Meet our skilled Team</div>
      </div>
      <div className='flx-cnt-col'>
        <div className='team-images'>
          <div className='team-image'>
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
          <div className='team-image'>
            <div className='team-overlay flx-cnt-col pos-abs w100 h100'>
              <div className='team-name-container flx-cnt-col h100'>
                <div className='team-name'>
                  {TeamData[index + 1].first_name}{' '}
                  {TeamData[index + 1].last_name}
                </div>
                <FiPlus
                  className='team-plus'
                  size='2rem'
                  data-name={`${TeamData[index + 1].first_name} ${
                    TeamData[index + 1].last_name
                  }`}
                  onClick={(e) => handleTeamModal(e)}
                />
              </div>
              <div className='team-title-container'>
                <div className='team-title upper'>
                  {TeamData[index + 1].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamData[index + 1].imgSource}
                alt={TeamData[index + 1].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay flx-cnt-col pos-abs w100 h100'>
              <div className='team-name-container flx-cnt-col h100'>
                <div className='team-name'>
                  {TeamData[index + 2].first_name}{' '}
                  {TeamData[index + 2].last_name}
                </div>
                <FiPlus
                  className='team-plus'
                  size='2rem'
                  data-name={`${TeamData[index + 2].first_name} ${
                    TeamData[index + 2].last_name
                  }`}
                  onClick={(e) => handleTeamModal(e)}
                />
              </div>
              <div className='team-title-container'>
                <div className='team-title upper'>
                  {TeamData[index + 2].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamData[index + 2].imgSource}
                alt={TeamData[index + 2].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay flx-cnt-col pos-abs w100 h100'>
              <div className='team-name-container flx-cnt-col h100'>
                <div className='team-name'>
                  {TeamData[index + 3].first_name}{' '}
                  {TeamData[index + 3].last_name}
                </div>
                <FiPlus
                  className='team-plus'
                  size='2rem'
                  data-name={`${TeamData[index + 3].first_name} ${
                    TeamData[index + 3].last_name
                  }`}
                  onClick={(e) => handleTeamModal(e)}
                />
              </div>
              <div className='team-title-container'>
                <div className='team-title upper'>
                  {TeamData[index + 3].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamData[index + 3].imgSource}
                alt={TeamData[index + 3].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay flx-cnt-col pos-abs w100 h100'>
              <div className='team-name-container flx-cnt-col h100'>
                <div className='team-name'>
                  {TeamData[index + 4].first_name}{' '}
                  {TeamData[index + 4].last_name}
                </div>
                <FiPlus
                  className='team-plus'
                  size='2rem'
                  data-name={`${TeamData[index + 4].first_name} ${
                    TeamData[index + 4].last_name
                  }`}
                  onClick={(e) => handleTeamModal(e)}
                />
              </div>
              <div className='team-title-container'>
                <div className='team-title upper'>
                  {TeamData[index + 4].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamData[index + 4].imgSource}
                alt={TeamData[index + 4].altText}
              />
            </div>
          </div>
        </div>
        <div className='team-carousel-control'>
          <div className='tcc flx-cnt' onClick={() => button1()}>
            <div className={`${tccBorder1} pos-abs w100 h100`} />
            <BsDot size='1.5rem' />
          </div>
          <div className='tcc flx-cnt' onClick={() => button2()}>
            <div className={`${tccBorder2} pos-abs w100 h100`} />
            <BsDot size='1.5rem' />
          </div>
          <div className='tcc flx-cnt' onClick={() => button3()}>
            <div className={`${tccBorder3} pos-abs w100 h100`} />
            <BsDot size='1.5rem' />
          </div>
          <div className='tcc flx-cnt' onClick={() => button4()}>
            <div className={`${tccBorder4} pos-abs w100 h100`} />
            <BsDot size='1.5rem' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
