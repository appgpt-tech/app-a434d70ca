//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    users: {
      name: 'Users',
      fields: {
        userId: 'User Id',
        userName: 'User Name',
        userPic: 'User Pic',
        userPhone: 'User Phone',
        userPoints: 'User Points',
        id: 'id',
      },
    },
    teamsSport: {
      name: 'Teams Sport',
      fields: {
        teamId: 'Team Id',
        teamName: 'Team Name',
        teamLogo: 'Team Logo',
        id: 'id',
      },
    },
    match: {
      name: 'Match',
      fields: {
        matchId: 'Match Id',
        date: 'Date',
        time: 'Time',
        matchType: 'Match Type',
        teamAId: 'Team Aid',
        teamBId: 'Team Bid',
        status: 'Status',
        id: 'id',
      },
    },
    pointTable: {
      name: 'Point Table',
      fields: {
        userId: 'User Id',
        state: 'State',
        totalPoints: 'Total Points',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    users: {
      name: 'Users (fr)',
      fields: {
        userId: 'User Id (fr)',
        userName: 'User Name (fr)',
        userPic: 'User Pic (fr)',
        userPhone: 'User Phone (fr)',
        userPoints: 'User Points (fr)',
        id: 'id',
      },
    },
    teamsSport: {
      name: 'Teams Sport (fr)',
      fields: {
        teamId: 'Team Id (fr)',
        teamName: 'Team Name (fr)',
        teamLogo: 'Team Logo (fr)',
        id: 'id',
      },
    },
    match: {
      name: 'Match (fr)',
      fields: {
        matchId: 'Match Id (fr)',
        date: 'Date (fr)',
        time: 'Time (fr)',
        matchType: 'Match Type (fr)',
        teamAId: 'Team Aid (fr)',
        teamBId: 'Team Bid (fr)',
        status: 'Status (fr)',
        id: 'id',
      },
    },
    pointTable: {
      name: 'Point Table (fr)',
      fields: {
        userId: 'User Id (fr)',
        state: 'State (fr)',
        totalPoints: 'Total Points (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
