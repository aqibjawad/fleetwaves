import Home from "../Views/Home"

import PlanPricing from "../Views/Plan and Pricing"

import Affiliate from "../Views/Affiliate/AffiliateProgram"

import Services from "../Views/Services"


const routes =[

    {path:'/', element:<Home />, exact:'true', type:'public' },

    {path:'/planandpricing', element:<PlanPricing />, exact:'true', type:'public' },

    {path:'/affiliate', element:<Affiliate />, exact:'true', type:'public' },

    {path:'/services', element:<Services />, exact:'true', type:'public' },
    
]

export default routes
