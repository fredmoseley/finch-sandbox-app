import type Finch from '@tryfinch/finch-api'

export const employeeDirectoryTest = {
  paging: {
    count: 10,
    offset: 0
  },
  individuals: [
    {
      id: 'fdf3712b-bd67-418c-bbb9-5fb25acade97',
      first_name: 'Mike',
      middle_name: 'Lincoln',
      last_name: 'Bartoletti',
      manager: {
        id: 'e984f4cc-8ca8-4158-a03f-6c5df000c87b'
      },
      department: {
        name: 'Branding'
      },
      is_active: true
    },
    {
      id: '23efaf48-9141-4211-9301-9812db30dafb',
      first_name: 'Joseph',
      middle_name: 'Flynn',
      last_name: 'Cruickshank',
      manager: {
        id: '7046c41a-8b84-4b24-ae5e-750768a6b4e8'
      },
      department: {
        name: 'Branding'
      },
      is_active: false
    },
    {
      id: 'beb164e8-44d3-42a6-a395-4aeb0ad317f4',
      first_name: 'Patsy',
      middle_name: 'Dahlia',
      last_name: 'Dach',
      manager: {
        id: 'd1e61c4b-8cf3-46fc-8a0b-10b1311cd342'
      },
      department: {
        name: 'Branding'
      },
      is_active: true
    },
    {
      id: 'e984f4cc-8ca8-4158-a03f-6c5df000c87b',
      first_name: 'Suzanne',
      middle_name: 'Iowa',
      last_name: 'Dietrich',
      manager: {
        id: null
      },
      department: {
        name: 'Branding'
      },
      is_active: true
    },
    {
      id: '7046c41a-8b84-4b24-ae5e-750768a6b4e8',
      first_name: 'Cecelia',
      middle_name: 'Ellen',
      last_name: 'Ferry',
      manager: {
        id: null
      },
      department: {
        name: 'Branding'
      },
      is_active: false
    },
    {
      id: 'd1e61c4b-8cf3-46fc-8a0b-10b1311cd342',
      first_name: 'Ramiro',
      middle_name: 'Ezra',
      last_name: 'Ferry',
      manager: {
        id: '28f7c610-70a7-4520-a038-f2d3761bc317'
      },
      department: {
        name: 'Branding'
      },
      is_active: true
    },
    {
      id: 'f422991c-9610-4102-af4f-950599175c99',
      first_name: 'Kenneth',
      middle_name: 'Elijah',
      last_name: 'Huels',
      manager: {
        id: '20ea0cb6-dc12-478c-8277-63985574f738'
      },
      department: {
        name: 'Branding'
      },
      is_active: false
    },
    {
      id: '9faf9ac1-bc86-4828-b2c0-08f0480d995c',
      first_name: 'Delbert',
      middle_name: 'Hank',
      last_name: 'Kovacek',
      manager: {
        id: 'd1e61c4b-8cf3-46fc-8a0b-10b1311cd342'
      },
      department: {
        name: 'Branding'
      },
      is_active: true
    },
    {
      id: '28f7c610-70a7-4520-a038-f2d3761bc317',
      first_name: 'Sherman',
      middle_name: 'Ethan',
      last_name: 'McClure',
      manager: {
        id: 'fdf3712b-bd67-418c-bbb9-5fb25acade97'
      },
      department: {
        name: 'Branding'
      },
      is_active: false
    },
    {
      id: '20ea0cb6-dc12-478c-8277-63985574f738',
      first_name: 'Ruth',
      middle_name: 'Julien',
      last_name: 'Schaefer',
      manager: {
        id: '28f7c610-70a7-4520-a038-f2d3761bc317'
      },
      department: {
        name: 'Branding'
      },
      is_active: true
    }
  ]
}

export const employeePersonalDataTest = {
  responses: [
    {
      individual_id: 'fdf3712b-bd67-418c-bbb9-5fb25acade97',
      code: 200,
      body: {
        id: 'fdf3712b-bd67-418c-bbb9-5fb25acade97',
        first_name: 'Mike',
        middle_name: 'Lincoln',
        last_name: 'Bartoletti',
        preferred_name: null,
        dob: '1958-06-08',
        emails: [],
        phone_numbers: [
          {
            data: '610-693-0932',
            type: 'personal'
          }
        ],
        gender: 'male',
        ethnicity: null,
        residence: {
          line1: '510 Whitney Pine',
          line2: 'Apt. 808',
          city: 'Hudsonchester',
          state: 'NE',
          postal_code: '88481',
          country: 'US'
        }
      }
    }
  ]
}

export const employeeEmploymentDataTest = {
  responses: [
    {
      individual_id: 'fdf3712b-bd67-418c-bbb9-5fb25acade97',
      code: 200,
      body: {
        id: 'fdf3712b-bd67-418c-bbb9-5fb25acade97',
        first_name: 'Mike',
        middle_name: 'Lincoln',
        last_name: 'Bartoletti',
        title: 'Dynamic Configuration Consultant',
        manager: {
          id: 'e984f4cc-8ca8-4158-a03f-6c5df000c87b'
        },
        employment: {
          type: 'contractor',
          subtype: null
        },
        department: {
          name: 'Branding'
        },
        start_date: '2020-11-25',
        end_date: null,
        is_active: true,
        class_code: '1056',
        location: {
          line1: '12756 Wilderman Flat',
          line2: 'Suite 091',
          city: 'South Jenniferbury',
          state: 'NH',
          postal_code: '07293-6991',
          country: 'US'
        },
        income: {
          unit: 'hourly',
          amount: 3017,
          currency: 'USD',
          effective_date: '2024-03-15'
        },
        income_history: [
          {
            unit: 'hourly',
            amount: 2715,
            currency: 'USD',
            effective_date: '2023-03-15'
          },
          {
            unit: 'hourly',
            amount: 2685,
            currency: 'USD',
            effective_date: '2022-03-15'
          },
          {
            unit: 'hourly',
            amount: 2655,
            currency: 'USD',
            effective_date: '2021-03-15'
          }
        ],
        custom_fields: [
          {
            name: 'sit',
            value: 'eligendi quae dolorem quo commodi molestias'
          }
        ]
      }
    }
  ]
}

export const employerCompanyDataTest = {
  "id": "bbd97f2a-dbc8-45f9-9dab-8c503ad7a9c5",
  "legal_name": "Sweltering Town, Inc",
  "entity": {
    "type": "sole_proprietor",
    "subtype": "b_corporation"
  },
  "ein": "74-8006135",
  "primary_email": "Elisha_Jenkins@sweltering-town-inc.com",
  "primary_phone_number": "6907052238",
  "departments": [
    {
      "name": "Security",
      "parent": {
        "name": null
      }
    },
    {
      "name": "Integration",
      "parent": {
        "name": "Security"
      }
    },
    {
      "name": "Mobility",
      "parent": {
        "name": "Security"
      }
    },
    {
      "name": "Branding",
      "parent": {
        "name": "Integration"
      }
    },
    {
      "name": "Division",
      "parent": {
        "name": null
      }
    },
    {
      "name": "Assurance",
      "parent": {
        "name": "Security"
      }
    },
    {
      "name": "Mobility",
      "parent": {
        "name": "Mobility"
      }
    }
  ],
  "locations": [
    {
      "line1": "61608 Kacie Villages",
      "line2": "Apt. 268",
      "city": "Dandreville",
      "state": "NC",
      "postal_code": "32107-5671",
      "country": "US"
    },
    {
      "line1": "2930 Bergnaum Centers",
      "line2": "Apt. 513",
      "city": "Zboncakhaven",
      "state": "NC",
      "postal_code": "50135",
      "country": "US"
    },
    {
      "line1": "12756 Wilderman Flat",
      "line2": "Suite 091",
      "city": "South Jenniferbury",
      "state": "NH",
      "postal_code": "07293-6991",
      "country": "US"
    }
  ],
  "accounts": [
    {
      "institution_name": "CAPITAL ONE",
      "account_name": null,
      "account_number": "7455629915",
      "account_type": "checking",
      "routing_number": "833112929"
    }
  ]
}

export const badCompanyDataTest = {
  "id": "c208ce8f-7094-4100-9444-14ceaab1f6cb",
  "legal_name": "Sane Consulate LLC",
  "entity": {
    "type": "cooperative",
    "subtype": "c_corporation"
  },
  "ein": null,
  "primary_email": null,
  "primary_phone_number": null,
  "departments": [
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    },
    {
      "name": null,
      "parent": {
        "name": null
      }
    }
  ],
  "locations": [
    {
      "line1": "6659 Adams Loaf",
      "line2": "Suite 941",
      "city": "New Magdalena",
      "state": "CT",
      "postal_code": "75623-3086",
      "country": "US"
    },
    {
      "line1": "2485 Reagan Groves",
      "line2": "Apt. 776",
      "city": "West Lizzieburgh",
      "state": "WV",
      "postal_code": "50703-3290",
      "country": "US"
    }
  ],
  "accounts": null
}
