SELECT 
    * 
FROM
    {{ ref('dim_listings_cleansed') }} l LEFT JOIN 
    {{ ref('fct_reviews') }} r USING (listing_id)
    WHERE r.review_date <= l.created_at 
LIMIT 10