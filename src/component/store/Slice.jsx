import { createSlice } from "@reduxjs/toolkit";
import portefile from './../../asset/CV_2024-01-20_Ennajy_Youness_page-0001.png';

const sliceinfo = createSlice({
  name: "informations",
  initialState: {
    listinfo: [ {
      profileImage:portefile,
      position: 'Technicien spécialisé en developpement digital option fullstack',
      catchphrase: `
        Intéressé par un stage, toutes opportunités de travail, collaborations, nouveaux projets et freelance.
        J'ai un caractère d'engagement total avec un bon relationnel, une grande capacité d'écoute, et une grande implication avec des idées de carrière ambitieuses.
        Je suis particulièrement intéressé par le développement des applications web en utilisant (React JS, Laravel, Tailwind CSS).
      `,
      
      email: 'younessennajy30@gmail.com',
      mobileNumber: '0649-962806',
      homeAddress: 'Fés',
      mobility: 'Nationnel',
      dateOfBirth: '2000-05-23',
      maritalStatus: 'Single',
      nationality: 'morrocan',
      languages: [
        { language: 'French', level: 'Beginner' },
        { language: 'English', level: 'Advanced' },
      ],
      Centreinteret:['dsssssf'],
      Resiaux:['qdzsd','sdfefr']
    },
  ],



  competenceData :[
    {
      title: 'React js',
      description: 'qssc',
    },
  ],
  DiplomaData : [
    {
      diploma: 'Technicien spécialisé en developpement digital option Fullstack',
      school: 'Centre de formation et d\'aide à l\'insertion des jeunes',
      place: 'Fes',
      details: 'Au cours de ma première année à l\'ISTA, j\'ai été initié aux fondamentaux du développement digital (html, css, js, Bootstrap, mysql, php), acquérant ainsi une base solide pour ma future carrière dans le développement des site web.'
    },
  ]

  },
  reducers: {
    ajouterInfo: (state, action) => {
      state.listinfo.push(action.payload);
    },
    deleteLangue: (state, action) => {
      const { index } = action.payload;
      const langIndex = state.listinfo[0]?.languages.findIndex((lang, idx) => idx === index);

      if (langIndex !== -1) {
        state.listinfo[0].languages.splice(langIndex, 1);
      }
    },
    modifierInfo: (state, action) => {
      const { id, ...updatedInfo } = action.payload;
      const existingInfo = state.listinfo.find((info) => info.id === id);
      
      if (existingInfo) {
        Object.assign(existingInfo, updatedInfo);
      }
    },


    addDiploma: (state, action) => {
      state.DiplomaData.push(action.payload);
    },
    updatediploma: (state, action) => {
      const { id, ...updatedDiploma } = action.payload;
      const existingDiploma = state.DiplomaData.find((diploma) => diploma.id === id);
    
      if (existingDiploma) {
        Object.assign(existingDiploma, updatedDiploma);
      }
    },
    
    deletediploma: (state, action) => {
      const { index } = action.payload;
      if (index !== -1) {
        state.DiplomaData.splice(index, 1);
      }
    },
    

    addCompetence: (state, action) => {
      state.competenceData.push(action.payload);
    },
    updateCompetence: (state, action) => {
      const { id, ...updatedCompetence } = action.payload;
      const existingCompetence = state.competenceData.find((comp) => comp.id === id);

      if (existingCompetence) {
        Object.assign(existingCompetence, updatedCompetence);
      }
    },
    deleteCompetence : (state, action) => {
      const { id } = action.payload;
      const index = state.competenceData.findIndex(comp => comp.id === id);
      if (index !== -1) {
        state.competenceData.splice(index, 1);
      }
    },
    

  },
});

export const {
      ajouterInfo,modifierInfo,deleteLangue,
      addCompetence, updateCompetence,deleteCompetence,
      addDiploma,updatediploma,deletediploma,

  
  } = sliceinfo.actions;
export default sliceinfo.reducer;
