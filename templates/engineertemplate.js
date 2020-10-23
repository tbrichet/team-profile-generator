// Engineer Card Template
const createEngineerCard = employeeData => {
    return (`
        <div class="card col-3.5 mb-3"style="margin:5px; width:auto">
            <div class="card-header" style="background-color:gold">
                <h3><b>${employeeData.name}</b></h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${employeeData.id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${employeeData.email}">${employeeData.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${employeeData.github}" target="_blank">${employeeData.github}</a></li>
                </ul>
            </div>
        </div>`)
};

module.exports = createEngineerCard;
