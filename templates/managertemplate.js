// Manager Card Template
const createManagerCard = employeeData => {
    `
        <div class="card mb-3 col-3.5" style="margin:5px; width:auto">
            <div class="card-header" style="background-color:gold">
                <h3><b>${employeeData.name}</b></h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${employeeData.id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${employeeData.email}">${employeeData.email}</a></li>
                    <li class="list-group-item">Office Number: 1</li>
                </ul>
            </div>
        </div>`
};

module.exports = createManagerCard;