import testimonials from "@/content/testimonials.json";

export function TestimonialsSection() {
    return (
        <section>
            <div style={{textAlign: "center", marginBottom: 20}}>
                <h2 style={{margin: 0}}>Testimonials</h2>
                <p style={{marginTop: 8, color: "#6b7280"}}>
                    What customers are saying about Jogchain
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gap: 16,
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
                }}
            >
                {testimonials.map(t => (
                    <article
                        key={t.id}
                        style={{
                            padding: 16,
                            borderRadius: 8,
                            border: "1px solid #e5e7eb",
                            background: "#ffffff",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
                        }}
                        aria-labelledby={`testimonial-${t.id}-name`}
                    >
                        <blockquote
                            style={{
                                margin: 0,
                                fontStyle: "italic",
                                color: "#111827"
                            }}
                        >
                            “{t.quote}”
                        </blockquote>

                        <footer
                            style={{
                                marginTop: 12,
                                display: "flex",
                                alignItems: "center",
                                gap: 12
                            }}
                        >
                            <div
                                aria-hidden
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    background: "#eef2ff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    color: "#4f46e5"
                                }}
                            >
                                {t.name
                                    .split(" ")
                                    .map(n => n[0])
                                    .slice(0, 2)
                                    .join("")}
                            </div>

                            <div>
                                <div
                                    id={`testimonial-${t.id}-name`}
                                    style={{fontWeight: 600}}
                                >
                                    {t.name}
                                </div>
                                <div style={{fontSize: 13, color: "#6b7280"}}>
                                    {t.role}
                                </div>
                            </div>
                        </footer>
                    </article>
                ))}
            </div>
        </section>
    );
}
