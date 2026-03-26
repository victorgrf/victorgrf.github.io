var projectActual = 1;
var projetsTotal = 7;
var projects;

$(document).ready(() => {
    projects = $('.section-4-main-div');
})

function moveToProject(direction) {
    if(direction == 'left' && projectActual != 1) {
        projectActual -= 1;
    } else if(direction == 'right' && projectActual != projetsTotal) {
        projectActual += 1;
    }

    console.log('projectActual: ' + projectActual);
    for(let i = 1; i <= projetsTotal; i++) {
        if(i < projectActual) {
            console.log(i, ' = left');
            projects.eq(i -1).removeClass('project-right');
            projects.eq(i -1).addClass('project-left');
        } else if(i > projectActual) {
            console.log(i, ' = right');
            projects.eq(i -1).removeClass('project-left');
            projects.eq(i -1).addClass('project-right');
        } else {
            console.log(i, ' = center');
            projects.eq(i -1).removeClass('project-right');
            projects.eq(i -1).removeClass('project-left');
        }
    }
}