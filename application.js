const STATE_JSON = {

	skills: [
		{title: 'iOS', level: 85},
        {title: 'Java', level: 85},
        {title: 'Android', level: 60},
        {title: 'Python', level: 75},
        {title: 'Swift', level: 90},
        {title: 'SQL', level: 90},
        {title: 'Objective-C', level: 80},
        {title: 'Analytics', level: 80},
    ],

    projects: [
    	{
            "name": "Business Analytics",
            "category": ["Analytics", "Business", "Data Science"],
            "description": "It is a collection of 5 courses on business analytics, currently working on the 3rd part of the series.",
            "links": {
                "github": "",
            },
            "image": "images/placeholder.png"
        },

    	{
            "name": "Notes",
            "category": ["Swift", "iOS"],
            "description": "An iOS application used for creating and managing notes. It is completely developed using native components written in Swift.",
            "links": {
                "github": "https://github.com/CodeSurgeonX/Notes",
            },
            "image": "images/placeholder.png"
        },

    	{
            "name": "Chatterbox",
            "category": ["Swift", "iOS"],
            "description": "A messenger for iOS to connect and chat with your friends. It is completely written in Swift.",
            "links": {
                "github": "https://github.com/CodeSurgeonX/ChatterBox",
            },
            "image": "images/placeholder.png"
        },

        {
            "name": "Clima",
            "category": ["Swift", "iOS"],
            "description": "It iOS app that tells you about the weather around you or anywhere in the world",
            "links": {
                "github": "https://github.com/CodeSurgeonX/Clima",
            },
            "image": "images/placeholder.png"
        }    
    ]
};

function renderSkill(skill) {
    const rotate = 180 + (18 / 5 * (skill.level - 50));
    return `<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="skill-wrapper my-3">
                    <span class="label">${skill.level}%<br><small>${skill.title}</small></span>
                    <div class="skill-circle">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle" style="transform: rotate(${rotate}deg);-webkit-transform: rotate(${rotate});"></div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </div>`;
};

function renderProjects(item, i){

    return `<div class="col-sm-6 col-md-4 col-xl-3 mt-3 mb-3"> 
  				<div class="card d-flex flex-column justify-content-center align-items-center">
    				<h5 class="mt-5 card-title">${item.name}</h5>
    				<button class="btn btn-secondary btn-lg my-5 font-weight-bold" onclick="renderModal(${i})">Details</button>
  				</div>
			</div>`;

};

function renderModal(index){
	
    const item = STATE_JSON.projects[index];
    const modal =
        `<div class="modal fade" id="projectModal" tabindex="-1">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header d-flex align-items-center">
                        <div>
                            <h3 class="modal-title text-dark">${item.name}</h3>
                        </div>
                        <div>${renderProjectLinks(item)}</div>
                        
                    </div>
                    <div class="modal-body">
                    	<div>${renderBadges(item)}</div>
                    	<br>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-7 col-lg-8">
                                <p id="model-text">${item.description}</p>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
                                <img class="img-fluid img-thumbnail" style="max-height: 100vh;"  src="${item.image}" alt="${item.name} cover"/>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
    $('#model-root').html(modal);
    $('#projectModal').modal().show();
};

function renderBadges(item) {
    return item.category.map(value => {
        return `<span class="badge badge-info badge-pill mr-2 p-2">${value}</span>`;
    }).join('');
};

function renderProjectLinks(item) {
    let links = '';
    if (item.links.hasOwnProperty('website')) {
        links += `<a class="text-black-50 mx-3" href="${item.links.website}" target="_blank">
                    <i class="fas fa-globe fa-2x move"></i>
                </a>`;
    }
    if (item.links.hasOwnProperty('github')) {
        links += `<a class="text-black-50 mx-3" href="${item.links.github}" target="_blank">
                    <i class="fab fa-2x fa-github move"></i>
                </a>`;
    }
    return links;
}


$(() => {
	const sorted_skills = STATE_JSON.skills.sort((a, b) => b.level - a.level);
    $('.charts-container').html(sorted_skills.map((value, i) => {
        return renderSkill(value, i);
    }).join(''));

    $("#project-root").html(STATE_JSON.projects.map((value, i) => {
        return renderProjects(value, i);
    }).join(''));

});