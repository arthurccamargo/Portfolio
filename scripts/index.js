const elemProjects = document.getElementById('project__content')

const createImage = (image) => {
    const elemPicture = document.createElement('picture')
    const elemImg = document.createElement('img')
    elemImg.setAttribute('src', image)
    elemPicture.appendChild(elemImg)

    return elemPicture
}

const createStrong = (name) => {
    const elemStrong = document.createElement('strong')
        elemStrong.innerText = name

    return elemStrong
}

 
const createTags = (tags) => {
    const elemTags = document.createElement('div')
        tags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag
            elemTags.appendChild(elemTag)
        });

    return elemTags
}

const createProject = (project) => {
    const elemProject = document.createElement('a')
        elemProject.setAttribute('href', project.link)
        elemProject.setAttribute('target', '_blank')     
        elemProject.classList.add('project')

        // add Picture
        elemProject.appendChild(createImage(project.image))
       
        // add Strong
        elemProject.appendChild(createStrong(project.name))

        // add Tags
        elemProject.appendChild(createTags(project.tags))

        return elemProject
}

const loadProjects = (projects) => {
    projects.forEach(project => {
        // add project in projects
        elemProjects.appendChild(createProject(project))
    });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)

