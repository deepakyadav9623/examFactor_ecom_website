import axios from 'axios';

export function getAssessmentList(id, category, subject) {
    return axios.get(`/json/assessmentList.json`);
}

export function getAssessmentDetails(id, category, subject, assessment) {
    return axios.get(`/json/viewDetails.json`);
}