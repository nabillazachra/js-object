const datas = [];

const elemShow = document.getElementById('show-data');

function showData() {
  var todoShow = "";
  if (datas.length < 1) {
    todoShow += `<div class="image"><img src="image1.svg" alt="image none"></div>`;
  }

  for (e of datas) {
    const id = e.id,
    first = e.first,
    last = e.last,
    nik = e.nik,
    place = e.place,
    dob = e.dob,
    phone = e.phone,
    partner = e.partner,
    address = e.address;

    var fullName = `${first} ${last}`;

    todoShow += `
      <div class="get-todo card">
      <button class="btn-delete" onclick="deleteData(${id})">X</button>
        <div class="display-data"><td width="50%">${fullName} <hr></div>
        <div class="display-data">${nik} <hr></div>
        <div class="display-data">
          <table width="100%">
            <tr>
              <td width="50%">${place} <hr style="width: 80%"></td>
              <td width="50%">${dob} <hr style="width: 80%"></td>
            </tr>
          </table>
        </div>
        <div class="display-data">
          <table width="100%">
            <tr>
              <td width="50%">${phone} <hr style="width: 80%"></td>
              <td width="50%">${partner} <hr style="width: 80%"></td>
            </tr>
          </table>
        </div>
        <div class="display-data">${address}<hr></div>
      </div>
    `
  }

  elemShow.innerHTML = todoShow;
}

function addData(e) {
  e.preventDefault();

  const inputFirst = document.getElementById('field-first'),
  inputLast = document.getElementById('field-last'),
  inputNik = document.getElementById('field-nik'),
  inputPlace = document.getElementById('field-place'),
  inputDate = document.getElementById('field-date'),
  inputPhone = document.getElementById('field-phone'),
  inputPartner = document.getElementById('partner'),
  inputAddress = document.getElementById('field-address');

  var data = {
    id: Date.now(),
    first: inputFirst.value,
    last: inputLast.value,
    nik: inputNik.value,
    place: inputPlace.value,
    dob: inputDate.value,
    phone: inputPhone.value,
    partner: inputPartner.value,
    address: inputAddress.value,
  };

  datas.push(data);
  inputFirst.value = "";
  inputLast.value = "";
  inputNik.value = "";
  inputPlace.value = "";
  inputDate.value = "";
  inputPhone.value = "";
  inputPartner.value = "";
  inputAddress.value = ""; 

  showData();
}

function deleteData(id) {
  for (var i = 0; i < datas.length; i++) {
    if (id === datas[i].id) {
      datas.splice(i,1);
    }
  }

  showData();
}


showData();