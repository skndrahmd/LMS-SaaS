'use server'

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "@/lib/supabase"


export const getCompanionById = async (id: string) => {
    const supabase = createSupabaseClient()
    const {data: companion, error} = await supabase.from('companions').select().eq('id', id).single()
    if(error) {
        console.log('Supabase error:', error)
        return {error}
    }
    console.log('Supabase response - companion data:', companion)
    return {companion}
}


export const addToSessionHistory = async (companionId: string) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from('session_history')
        .insert({
            companion_id: companionId,
            user_id: userId,
        })

    if(error) throw new Error(error.message);

    return data;
}



export const getAllCompanions = async (params?: { search?: string; subject?: string }) => {
    const supabase = createSupabaseClient()

    let query = supabase.from('companions').select()

    // Apply subject filter if provided
    if (params?.subject) {
        query = query.eq('subject', params.subject)
    }

    // Apply search filter if provided
    if (params?.search) {
        query = query.or(`name.ilike.%${params.search}%,topic.ilike.%${params.search}%`)
    }

    const {data: companions, error} = await query

    if(error) {
        console.log('Supabase error:', error)
        return {error}
    }

    console.log('Supabase response - companion data:', companions)
    console.log('Search params:', params)

    return {companions}
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