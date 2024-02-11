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
    },],
  },
  reducers: {
    ajouterInfo: (state, action) => {
      state.listinfo.push(action.payload);
    },
    modifierInfo: (state, action) => {
      const { id, ...updatedInfo } = action.payload;
      const existingInfo = state.listinfo.find((info) => info.id === id);
      
      if (existingInfo) {
        Object.assign(existingInfo, updatedInfo);
      }
    },
  },
});

export const { ajouterInfo,modifierInfo } = sliceinfo.actions;
export default sliceinfo.reducer;
