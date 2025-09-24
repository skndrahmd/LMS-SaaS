'use server'

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "@/lib/supabase"


export const getAllCompanions = async () => {
    const supabase = createSupabaseClient()

    const {data: companions, error} = await supabase.from('companions').select()

    if(error) {
        console.log('Supabase error:', error)
        return {error}
    }

    console.log('Supabase response - companion data:', companions)
    console.log('First companion:', companions?.[0])
    console.log('Companion ID:', companions?.[0]?.id)

    // Return the first companion from the array since insert().select() returns an array
    return {companions: companions?.[0]}
}


export const createCompanion = async (formData: CreateCompanion) => {
    const {userId: author} = await auth()
    const supabase = createSupabaseClient()

    const {data: companion, error} = await supabase.from('companions').insert({
       ... formData,
        author
    }).select()
    
    if(error) {
        console.log('Supabase error:', error)
        return {error}
    }

    console.log('Supabase response - companion data:', companion)
    console.log('First companion:', companion?.[0])
    console.log('Companion ID:', companion?.[0]?.id)

    // Return the first companion from the array since insert().select() returns an array
    return {companion: companion?.[0]}
}