/*
	var projectButtons = document.getElementsByClassName(".ProjectRow");
	var i;
	for(i = 0; i < projectButtons.length; i++)
		{
			projectbuttons[i].addEventListener("click", function(){
				windows.alert("project clicked");
			})
		}*/
var currentOpenProject = null;

function OnDropdownProject( row)
{
	if (currentOpenProject != null)
	{
			currentOpenProject.hidden = true;
	}
	const projectToOpen = document.getElementById('projectMoreInfo');
	if (projectToOpen != null)
	{
			projectToOpen.hidden = false;
	}
	currentOpenProject = projectToOpen;
}

function OnMouseEnterProject( row)
{
	row.style.borderRadius = "25px";
	row.style.border = "2px solid lightgrey";

}

function OnMouseLeaveProject( row)
{
	row.style.border = "";
}
// JavaScript Document