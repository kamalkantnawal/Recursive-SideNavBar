export const data = [
  {
    label: "Home",
    key: "home",
    to: "/",
  },
  {
    label: "Profile",
    key: "profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        key: "details",
        to: "details",
        children: [
          {
            label: "Location",
            key: "location",
            to: "location",
            children: [
              {
                label: "City",
                key: "city",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Setting",
    key: "setting",
    to: "/setting",
    children: [
      {
        label: "Acount",
        key: "acount",
        to: "acount",
      },
    ],
  },
  {
    label: "Security",
    key: "security",
    to: "/security",
    children: [
      {
        label: "Login",
        key: "login",
        to: "login",
      },
      {
        label: "Register",
        key: "register",
        to: "register",
        children: [
          {
            label: "Random Data",
            key: "randomData",
            to: "register",
          },
        ],
      },
    ],
  },
];
console.log("data", data);
