const container = document.getElementById("container");
const jobFilter = document.getElementById("job_filter");
const childSelect = document.getElementById("select_children")
const cardMain = document.getElementById("card_master");

let arrFilter=[];

let nodeCloned=cardMain.cloneNode(true);
window.addEventListener("load", ()=>{
    jobFilter.classList.add("hidden")
    fetch("data.json")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res =>{
        const fragment = document.createDocumentFragment()
        for(const aux of res){
            let copy=cardMain.cloneNode(true);
            let arHelp=[];
            arHelp.push(aux.role)
            arHelp.push(aux.level)
            copy.classList.remove("job_hidden")
            if(aux.languages.length>0 || aux.tools.length>0){
                for(const tols of aux.languages){
                    arHelp.push(tols)
                }
                for(const tols of aux.tools){
                    arHelp.push(tols)
                }
            }
            arrFilter.push(arHelp)
            if(aux.new==false) copy.children[0].children[1].children[0].children[1].classList.add("job_hidden")
            if(aux.featured==false) copy.children[0].children[1].children[0].children[2].classList.add("job_hidden")
            
            let companyName=copy.children[0].children[1].children[0].children[0];
            let companyLogo=copy.children[0].children[0];
            let careerName = copy.children[0].children[1].children[1];
            let postedAt =copy.children[0].children[1].children[2].children[0].children[0];
            let contract =copy.children[0].children[1].children[2].children[1].children[0];
            let location =copy.children[0].children[1].children[2].children[2].children[0];
            let tagLocation=copy.children[1];
            companyName.textContent=aux.company;
            companyLogo.src=aux.logo;
            careerName.textContent=aux.position;
            postedAt.textContent=aux.postedAt;
            contract.textContent=aux.contract;
            location.textContent=aux.location;
            for(const arWorker of arHelp){
                const aTag = document.createElement("A");
                aTag.textContent=arWorker;
                aTag.classList.add("job_requiments")
                tagLocation.append(aTag);
            }
            fragment.append(copy)
        }
        container.appendChild(fragment)
})

container.addEventListener("click", (e)=>{
    const fragment = document.createDocumentFragment()
    if(e.target.tagName=="A" && e.target.classList[0]=="job_requiments"){
        jobFilter.classList.remove("hidden")
        e.preventDefault()
        const divContainer = document.createElement("DIV")
        const paraghaps = document.createElement("P")
        const button = document.createElement("A")
        divContainer.classList.add("filter_tag");
        paraghaps.classList.add("filter_name");
        button.classList.add("delete_filter");
        button.textContent="X"
        paraghaps.textContent=e.target.textContent;
        divContainer.appendChild(paraghaps)
        divContainer.appendChild(button)
        fragment.appendChild(divContainer)
        filterTag(e.target.textContent,childSelect.children)
    }
    childSelect.appendChild(fragment)
})
})


jobFilter.addEventListener("click", (e)=>{
    let numberAux=0;
    if(e.target.classList[0]=="delete_filter"){
        let nameSelected = e.target.previousElementSibling.textContent;
        for(let i =0; i<e.target.parentElement.parentElement.children.length;i++){
            let childSelected = e.target.parentElement.parentElement.children[i].children[0].textContent;
            if(nameSelected===childSelected){
                numberAux=i;
            }
        }
    }else if(e.target.classList[0]=="clear"){
        while (childSelect.firstChild) {
            childSelect.removeChild(childSelect.firstChild);
        }
        console.log(container.children)
        jobFilter.classList.add("hidden")
        for(const auxChildren of container.children){
            if(auxChildren.classList.contains("job_hidden")) auxChildren.classList.remove("job_hidden")
        }
        container.children[1].classList.add("job_hidden")
    }
    childSelect.removeChild(childSelect.children[numberAux])
    if(childSelect.children.length==0){
        jobFilter.classList.add("hidden")
    }
})


/*filter job*/
console.log(arrFilter)
function filterTag(tag,filters){
    console.log(tag)
    let cont=1;
    for(const filterAux of arrFilter){
        cont+=1;
        console.log(filterAux)
        if(filterAux.includes(tag)){
            console.log(container.children[cont])
            container.children[cont].classList.remove("job_hidden")
        }else{
            container.children[cont].classList.add("job_hidden")
        }
    }
    console.log(filters)

}