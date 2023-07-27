
export default function company() {
    return { 
        'name': '', 
        'url': '',
        'type': '', 
        'parent': '',
        'reseller': '', 
        'id': ''
    }
}

export default function address() { 
    return { 
        'companyId': '',
        'address_1': '', 
        'address_2': '', 
        'city': '', 
        'state': '', 
        'zip': ''
        'latt': '', 
        'long': '', 
        'id': ''
    }
}

export function phone() { 
    return { 
        'companyId': '', 
        'number': '', 
        'type': '',
        'id': ''
    }
}

