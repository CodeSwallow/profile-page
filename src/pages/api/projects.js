import projects from '@/data/projects.json';

export function getProjects() {
    return projects.projects;
}

export function getProjectById(id) {
    return projects.projects.find(project => project.sk === id);
}

export function getOrderedProjects() {
    return projects.projects.sort((a, b) => {
        return new Date(b.timeline.startDate) - new Date(a.timeline.startDate);
    });
}
