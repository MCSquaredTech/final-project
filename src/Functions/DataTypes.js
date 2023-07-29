
function company() {
    return( { 
        name: '', 
        url: '',
        type: '', 
        parent: '',
        reseller: '', 
        id: ''
    });
}

function address() { 
    return ({ 
        companyId: '',
        address_1: '', 
        address_2: '', 
        city: '', 
        state: '', 
        zip: '',
        latt: '', 
        long: '', 
        id: ''
    });
}

function phone() { 
    return ({ 
        companyId: '', 
        number: '', 
        type: '',
        id: ''
    });
}

export {company, address, phone};
