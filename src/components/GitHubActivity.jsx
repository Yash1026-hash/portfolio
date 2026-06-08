import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const USERNAME = 'Yash1026-hash'

const LANG_COLORS = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Dart: '#00B4AB',
    Verilog: '#b2b7f8',
    MATLAB: '#e16737',
    'C++': '#f34b7d',
    C: '#555555',
    HTML: '#e34c26',
    Shell: '#89e051',
}

function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime()
    const days = Math.floor(diff / 86400000)
    if (days === 0) return 'today'
    if (days === 1) return '1d ago'
    if (days < 30) return `${days}d ago`
    const m = Math.floor(days / 30)
    return m < 12 ? `${m}mo ago` : `${Math.floor(m / 12)}y ago`
}

function eventLabel(e) {
    const repo = e.repo.name.replace(`${USERNAME}/`, '')
    switch (e.type) {
        case 'PushEvent':       return { icon: '↑', text: `pushed to ${repo}` }
        case 'CreateEvent':     return { icon: '✦', text: `created ${e.payload?.ref_type || 'repo'} in ${repo}` }
        case 'ReleaseEvent':    return { icon: '◈', text: `released in ${repo}` }
        case 'IssuesEvent':     return { icon: '◎', text: `${e.payload?.action} issue in ${repo}` }
        case 'PullRequestEvent':return { icon: '⇌', text: `${e.payload?.action} PR in ${repo}` }
        case 'WatchEvent':      return { icon: '★', text: `starred ${repo}` }
        case 'ForkEvent':       return { icon: '⑂', text: `forked ${repo}` }
        default:                return { icon: '·', text: repo }
    }
}

export default function GitHubActivity() {
    const [repos, setRepos] = useState([])
    const [events, setEvents] = useState([])
    const [userStats, setUserStats] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const SKIP = ['Yash1026-hash.github.io', 'skills-introduction-to-github', 'register', 'portfolio']

        Promise.allSettled([
            fetch(`https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=100&type=public`)
                .then(r => r.json()),
            fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=30`)
                .then(r => r.json()),
            fetch(`https://api.github.com/users/${USERNAME}`)
                .then(r => r.json()),
        ]).then(([reposRes, eventsRes, userRes]) => {
            if (reposRes.status === 'fulfilled' && Array.isArray(reposRes.value)) {
                setRepos(
                    reposRes.value
                        .filter(r => !r.fork && !SKIP.includes(r.name))
                        .slice(0, 8)
                )
            }
            if (eventsRes.status === 'fulfilled' && Array.isArray(eventsRes.value)) {
                setEvents(
                    eventsRes.value
                        .filter(e => ['PushEvent', 'CreateEvent', 'ReleaseEvent', 'PullRequestEvent'].includes(e.type))
                        .slice(0, 7)
                )
            }
            if (userRes.status === 'fulfilled') {
                setUserStats(userRes.value)
            }
            setLoading(false)
        })
    }, [])

    return (
        <section style={{ padding: '100px 0', borderTop: 'var(--hud-border)' }}>
            <div className="container">

                {/* ── Header ── */}
                <div style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <div className="mono-label">GITHUB // LIVE_FEED</div>
                        <h2 style={{ fontSize: '48px', marginTop: '16px' }}>Activity Log</h2>
                    </div>
                    <a
                        href={`https://github.com/${USERNAME}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary-red"
                        style={{ fontSize: '11px', padding: '10px 20px' }}
                    >
                        OPEN_PROFILE ↗
                    </a>
                </div>

                {/* ── Stats bar ── */}
                {userStats && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, border: 'var(--hud-border)', borderRadius: 4, overflow: 'hidden', marginBottom: 48 }}
                    >
                        {[
                            ['PUBLIC_REPOS', userStats.public_repos ?? '—'],
                            ['TOTAL_PROJECTS', '11+'],
                            ['LANGUAGES', '7+'],
                            ['STATUS', 'ACTIVE'],
                        ].map(([label, val]) => (
                            <div key={label} style={{ padding: '24px 20px', background: 'var(--bg-secondary)', textAlign: 'center', borderRight: 'var(--hud-border)' }}>
                                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 200, color: 'var(--text-primary)', marginBottom: 6 }}>{val}</div>
                                <div className="mono-label" style={{ fontSize: 9 }}>{label}</div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* ── Contribution graph ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48, border: 'var(--hud-border)', borderRadius: 4, background: 'var(--bg-secondary)', padding: '24px' }}
                >
                    <div className="mono-label" style={{ fontSize: 9, marginBottom: 16 }}>CONTRIBUTION_GRAPH // 12 MONTHS</div>
                    <img
                        src={`https://ghchart.rshah.org/0ea5e9/${USERNAME}`}
                        alt="GitHub contribution chart"
                        style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.85) contrast(1.2)' }}
                        onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
                    />
                </motion.div>

                {/* ── Repos + Events grid ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>

                    {/* Repos */}
                    <div>
                        <div className="mono-label" style={{ fontSize: 9, marginBottom: 20 }}>REPOSITORIES // RECENTLY_PUSHED</div>
                        {loading ? (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} style={{ height: 88, background: 'var(--bg-secondary)', borderRadius: 4, border: 'var(--hud-border)', animation: 'pulse 1.5s ease infinite', animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                                {repos.map((repo, i) => (
                                    <motion.a
                                        key={repo.name}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.04 }}
                                        whileHover={{ y: -2 }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '16px', background: 'var(--bg-secondary)', border: 'var(--hud-border)', borderRadius: 4, textDecoration: 'none', color: 'inherit', transition: 'border-color 200ms' }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-secondary)'}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = ''}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <span style={{ color: 'var(--accent-secondary)', fontSize: 12 }}>◈</span>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--accent-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                                                {repo.name}
                                            </span>
                                            {repo.stargazers_count > 0 && (
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-secondary)' }}>★{repo.stargazers_count}</span>
                                            )}
                                        </div>
                                        {repo.description && (
                                            <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                                                {repo.description.length > 70 ? repo.description.slice(0, 70) + '…' : repo.description}
                                            </p>
                                        )}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                            {repo.language && (
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: LANG_COLORS[repo.language] || '#6e7681', display: 'inline-block' }} />
                                                    {repo.language}
                                                </span>
                                            )}
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>{timeAgo(repo.pushed_at)}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Events feed */}
                    <div>
                        <div className="mono-label" style={{ fontSize: 9, marginBottom: 20 }}>RECENT_ACTIVITY // EVENT_STREAM</div>
                        <div style={{ border: 'var(--hud-border)', borderRadius: 4, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
                            {loading ? (
                                [...Array(5)].map((_, i) => (
                                    <div key={i} style={{ height: 44, margin: '0 16px', borderBottom: 'var(--hud-border)', animation: 'pulse 1.5s ease infinite', animationDelay: `${i * 0.1}s`, background: 'var(--bg-tertiary)', borderRadius: 3 }} />
                                ))
                            ) : events.length === 0 ? (
                                <div style={{ padding: '40px 16px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)' }}>NO_PUBLIC_EVENTS</div>
                            ) : events.map((e, i) => {
                                const { icon, text } = eventLabel(e)
                                return (
                                    <motion.div
                                        key={e.id}
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        style={{ display: 'grid', gridTemplateColumns: '20px 1fr auto', gap: 10, alignItems: 'center', padding: '12px 16px', borderBottom: i < events.length - 1 ? 'var(--hud-border)' : 'none' }}
                                    >
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-secondary)', textAlign: 'center' }}>{icon}</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{timeAgo(e.created_at)}</span>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Mini stats */}
                        {userStats && (
                            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                {[['FOLLOWERS', userStats.followers], ['FOLLOWING', userStats.following]].map(([l, v]) => (
                                    <div key={l} style={{ padding: '12px', background: 'var(--bg-secondary)', border: 'var(--hud-border)', borderRadius: 4, textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 200, color: 'var(--text-primary)' }}>{v}</div>
                                        <div className="mono-label" style={{ fontSize: 8, marginTop: 4 }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                @media (max-width: 768px) {
                    .gh-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    )
}
