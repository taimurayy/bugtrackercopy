toc.dat                                                                                             0000600 0004000 0002000 00000040702 14662133707 0014453 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   &                    |            bug_tracker    16.3    16.3 :    W           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         X           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         Y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         Z           1262    16758    bug_tracker    DATABASE     m   CREATE DATABASE bug_tracker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE bug_tracker;
                postgres    false         �            1259    16786 	   bugreport    TABLE     �  CREATE TABLE public.bugreport (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    status character varying(50) DEFAULT 'open'::character varying,
    assignee_id integer,
    reporter_id integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.bugreport;
       public         heap    postgres    false         �            1259    16785    bug_report_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bug_report_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.bug_report_id_seq;
       public          postgres    false    220         [           0    0    bug_report_id_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public.bug_report_id_seq OWNED BY public.bugreport.id;
          public          postgres    false    219         �            1259    16808 
   bug_report    TABLE        CREATE TABLE public.bug_report (
    id integer DEFAULT nextval('public.bug_report_id_seq'::regclass) NOT NULL,
    title character varying NOT NULL,
    description text NOT NULL,
    status character varying DEFAULT 'open'::character varying NOT NULL
);
    DROP TABLE public.bug_report;
       public         heap    postgres    false    219         �            1259    16807    bug_report_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.bug_report_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.bug_report_id_seq1;
       public          postgres    false    222         \           0    0    bug_report_id_seq1    SEQUENCE OWNED BY     H   ALTER SEQUENCE public.bug_report_id_seq1 OWNED BY public.bug_report.id;
          public          postgres    false    221         �            1259    16820    bugrep    TABLE     +  CREATE TABLE public.bugrep (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    status character varying(50) DEFAULT 'open'::character varying NOT NULL,
    assigned_id integer,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.bugrep;
       public         heap    postgres    false         �            1259    16819    bugrep_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bugrep_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.bugrep_id_seq;
       public          postgres    false    224         ]           0    0    bugrep_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.bugrep_id_seq OWNED BY public.bugrep.id;
          public          postgres    false    223         �            1259    16842    file_upload    TABLE     �   CREATE TABLE public.file_upload (
    id integer NOT NULL,
    filename character varying NOT NULL,
    path character varying NOT NULL,
    "bugReportId" integer NOT NULL,
    "uploadedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.file_upload;
       public         heap    postgres    false         �            1259    16841    file_upload_id_seq    SEQUENCE     �   CREATE SEQUENCE public.file_upload_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.file_upload_id_seq;
       public          postgres    false    228         ^           0    0    file_upload_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.file_upload_id_seq OWNED BY public.file_upload.id;
          public          postgres    false    227         �            1259    16832    file_uploads    TABLE     �   CREATE TABLE public.file_uploads (
    id integer NOT NULL,
    filename character varying(255) NOT NULL,
    path text NOT NULL,
    bug_report_id integer NOT NULL,
    uploaded_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.file_uploads;
       public         heap    postgres    false         �            1259    16831    file_uploads_id_seq    SEQUENCE     �   CREATE SEQUENCE public.file_uploads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.file_uploads_id_seq;
       public          postgres    false    226         _           0    0    file_uploads_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.file_uploads_id_seq OWNED BY public.file_uploads.id;
          public          postgres    false    225         �            1259    16773    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "roleId" integer NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false         �            1259    16772    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    218         `           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    217         �            1259    16760    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    roleid integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false         �            1259    16759    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216         a           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215         �           2604    16823 	   bugrep id    DEFAULT     f   ALTER TABLE ONLY public.bugrep ALTER COLUMN id SET DEFAULT nextval('public.bugrep_id_seq'::regclass);
 8   ALTER TABLE public.bugrep ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224         �           2604    16789    bugreport id    DEFAULT     m   ALTER TABLE ONLY public.bugreport ALTER COLUMN id SET DEFAULT nextval('public.bug_report_id_seq'::regclass);
 ;   ALTER TABLE public.bugreport ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220         �           2604    16845    file_upload id    DEFAULT     p   ALTER TABLE ONLY public.file_upload ALTER COLUMN id SET DEFAULT nextval('public.file_upload_id_seq'::regclass);
 =   ALTER TABLE public.file_upload ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228         �           2604    16835    file_uploads id    DEFAULT     r   ALTER TABLE ONLY public.file_uploads ALTER COLUMN id SET DEFAULT nextval('public.file_uploads_id_seq'::regclass);
 >   ALTER TABLE public.file_uploads ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226         �           2604    16776    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218         �           2604    16763    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216         N          0    16808 
   bug_report 
   TABLE DATA           D   COPY public.bug_report (id, title, description, status) FROM stdin;
    public          postgres    false    222       3662.dat P          0    16820    bugrep 
   TABLE DATA           Y   COPY public.bugrep (id, title, description, status, assigned_id, created_at) FROM stdin;
    public          postgres    false    224       3664.dat L          0    16786 	   bugreport 
   TABLE DATA           u   COPY public.bugreport (id, title, description, status, assignee_id, reporter_id, created_at, updated_at) FROM stdin;
    public          postgres    false    220       3660.dat T          0    16842    file_upload 
   TABLE DATA           V   COPY public.file_upload (id, filename, path, "bugReportId", "uploadedAt") FROM stdin;
    public          postgres    false    228       3668.dat R          0    16832    file_uploads 
   TABLE DATA           V   COPY public.file_uploads (id, filename, path, bug_report_id, uploaded_at) FROM stdin;
    public          postgres    false    226       3666.dat J          0    16773    user 
   TABLE DATA           I   COPY public."user" (id, username, email, password, "roleId") FROM stdin;
    public          postgres    false    218       3658.dat H          0    16760    users 
   TABLE DATA           F   COPY public.users (id, username, email, password, roleid) FROM stdin;
    public          postgres    false    216       3656.dat b           0    0    bug_report_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.bug_report_id_seq', 1, false);
          public          postgres    false    219         c           0    0    bug_report_id_seq1    SEQUENCE SET     A   SELECT pg_catalog.setval('public.bug_report_id_seq1', 1, false);
          public          postgres    false    221         d           0    0    bugrep_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.bugrep_id_seq', 26, true);
          public          postgres    false    223         e           0    0    file_upload_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.file_upload_id_seq', 1, false);
          public          postgres    false    227         f           0    0    file_uploads_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.file_uploads_id_seq', 1, false);
          public          postgres    false    225         g           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 19, true);
          public          postgres    false    217         h           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    215         �           2606    16816 )   bug_report PK_2885f11af36e1f953136d36e05f 
   CONSTRAINT     i   ALTER TABLE ONLY public.bug_report
    ADD CONSTRAINT "PK_2885f11af36e1f953136d36e05f" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.bug_report DROP CONSTRAINT "PK_2885f11af36e1f953136d36e05f";
       public            postgres    false    222         �           2606    16850 *   file_upload PK_bb8460e39fcad3aaa44d1d7e5d3 
   CONSTRAINT     j   ALTER TABLE ONLY public.file_upload
    ADD CONSTRAINT "PK_bb8460e39fcad3aaa44d1d7e5d3" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.file_upload DROP CONSTRAINT "PK_bb8460e39fcad3aaa44d1d7e5d3";
       public            postgres    false    228         �           2606    16780 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    218         �           2606    16782 #   user UQ_78a916df40e02a9deb1c4b75edb 
   CONSTRAINT     f   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb";
       public            postgres    false    218         �           2606    16784 #   user UQ_e12875dfb3b1d92d7d7c5377e22 
   CONSTRAINT     c   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22";
       public            postgres    false    218         �           2606    16796    bugreport bug_report_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT bug_report_pkey PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.bugreport DROP CONSTRAINT bug_report_pkey;
       public            postgres    false    220         �           2606    16829    bugrep bugrep_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.bugrep
    ADD CONSTRAINT bugrep_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.bugrep DROP CONSTRAINT bugrep_pkey;
       public            postgres    false    224         �           2606    16840    file_uploads file_uploads_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.file_uploads
    ADD CONSTRAINT file_uploads_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.file_uploads DROP CONSTRAINT file_uploads_pkey;
       public            postgres    false    226         �           2606    16771    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216         �           2606    16767    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216         �           2606    16769    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    216         �           2606    16797 %   bugreport bug_report_assignee_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT bug_report_assignee_id_fkey FOREIGN KEY (assignee_id) REFERENCES public.users(id);
 O   ALTER TABLE ONLY public.bugreport DROP CONSTRAINT bug_report_assignee_id_fkey;
       public          postgres    false    220    3491    216         �           2606    16802 %   bugreport bug_report_reporter_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT bug_report_reporter_id_fkey FOREIGN KEY (reporter_id) REFERENCES public.users(id);
 O   ALTER TABLE ONLY public.bugreport DROP CONSTRAINT bug_report_reporter_id_fkey;
       public          postgres    false    216    220    3491                                                                      3662.dat                                                                                            0000600 0004000 0002000 00000000005 14662133707 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3664.dat                                                                                            0000600 0004000 0002000 00000000651 14662133707 0014267 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        6	bug111	asa	open	7	2024-08-23 13:58:01.885
13	ooo11	dasda	open	5	2024-08-23 17:09:55.361
20	BUG1	DASDASDAS	open	5	2024-08-23 20:56:11.467
21	BUG33	dadasd	open	2	2024-08-23 21:01:01.746
22	BUGGG	DASDASD	open	5	2024-08-23 21:04:34.022
23	OOOO1	DASDAS	open	8	2024-08-23 21:08:53.19
24	BUUUUU	DASDA	open	5	2024-08-23 21:11:27.194
25	OOOAA	DSAD	open	2	2024-08-23 21:13:17.864
26	BUG111	DASDAS	open	3	2024-08-23 21:18:19.052
\.


                                                                                       3660.dat                                                                                            0000600 0004000 0002000 00000000005 14662133707 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3668.dat                                                                                            0000600 0004000 0002000 00000000005 14662133707 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3666.dat                                                                                            0000600 0004000 0002000 00000000005 14662133707 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3658.dat                                                                                            0000600 0004000 0002000 00000000207 14662133707 0014267 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        8	zohaib	zo@oo.com	1	3
3	usama	usama@oo.com	123	1
14	taimur	taimu@ok.com	123	1
19	hamz	hamza@yahoo.com	1	2
5	okkkk	o12@o.com	12	2
\.


                                                                                                                                                                                                                                                                                                                                                                                         3656.dat                                                                                            0000600 0004000 0002000 00000000005 14662133707 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000032701 14662133707 0015400 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE bug_tracker;
--
-- Name: bug_tracker; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE bug_tracker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE bug_tracker OWNER TO postgres;

\connect bug_tracker

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bugreport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bugreport (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    status character varying(50) DEFAULT 'open'::character varying,
    assignee_id integer,
    reporter_id integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.bugreport OWNER TO postgres;

--
-- Name: bug_report_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bug_report_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bug_report_id_seq OWNER TO postgres;

--
-- Name: bug_report_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bug_report_id_seq OWNED BY public.bugreport.id;


--
-- Name: bug_report; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bug_report (
    id integer DEFAULT nextval('public.bug_report_id_seq'::regclass) NOT NULL,
    title character varying NOT NULL,
    description text NOT NULL,
    status character varying DEFAULT 'open'::character varying NOT NULL
);


ALTER TABLE public.bug_report OWNER TO postgres;

--
-- Name: bug_report_id_seq1; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bug_report_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bug_report_id_seq1 OWNER TO postgres;

--
-- Name: bug_report_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bug_report_id_seq1 OWNED BY public.bug_report.id;


--
-- Name: bugrep; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bugrep (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    status character varying(50) DEFAULT 'open'::character varying NOT NULL,
    assigned_id integer,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.bugrep OWNER TO postgres;

--
-- Name: bugrep_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bugrep_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bugrep_id_seq OWNER TO postgres;

--
-- Name: bugrep_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bugrep_id_seq OWNED BY public.bugrep.id;


--
-- Name: file_upload; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.file_upload (
    id integer NOT NULL,
    filename character varying NOT NULL,
    path character varying NOT NULL,
    "bugReportId" integer NOT NULL,
    "uploadedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.file_upload OWNER TO postgres;

--
-- Name: file_upload_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.file_upload_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.file_upload_id_seq OWNER TO postgres;

--
-- Name: file_upload_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.file_upload_id_seq OWNED BY public.file_upload.id;


--
-- Name: file_uploads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.file_uploads (
    id integer NOT NULL,
    filename character varying(255) NOT NULL,
    path text NOT NULL,
    bug_report_id integer NOT NULL,
    uploaded_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.file_uploads OWNER TO postgres;

--
-- Name: file_uploads_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.file_uploads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.file_uploads_id_seq OWNER TO postgres;

--
-- Name: file_uploads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.file_uploads_id_seq OWNED BY public.file_uploads.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "roleId" integer NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    roleid integer NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: bugrep id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bugrep ALTER COLUMN id SET DEFAULT nextval('public.bugrep_id_seq'::regclass);


--
-- Name: bugreport id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bugreport ALTER COLUMN id SET DEFAULT nextval('public.bug_report_id_seq'::regclass);


--
-- Name: file_upload id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.file_upload ALTER COLUMN id SET DEFAULT nextval('public.file_upload_id_seq'::regclass);


--
-- Name: file_uploads id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.file_uploads ALTER COLUMN id SET DEFAULT nextval('public.file_uploads_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: bug_report; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bug_report (id, title, description, status) FROM stdin;
\.
COPY public.bug_report (id, title, description, status) FROM '$$PATH$$/3662.dat';

--
-- Data for Name: bugrep; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bugrep (id, title, description, status, assigned_id, created_at) FROM stdin;
\.
COPY public.bugrep (id, title, description, status, assigned_id, created_at) FROM '$$PATH$$/3664.dat';

--
-- Data for Name: bugreport; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bugreport (id, title, description, status, assignee_id, reporter_id, created_at, updated_at) FROM stdin;
\.
COPY public.bugreport (id, title, description, status, assignee_id, reporter_id, created_at, updated_at) FROM '$$PATH$$/3660.dat';

--
-- Data for Name: file_upload; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.file_upload (id, filename, path, "bugReportId", "uploadedAt") FROM stdin;
\.
COPY public.file_upload (id, filename, path, "bugReportId", "uploadedAt") FROM '$$PATH$$/3668.dat';

--
-- Data for Name: file_uploads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.file_uploads (id, filename, path, bug_report_id, uploaded_at) FROM stdin;
\.
COPY public.file_uploads (id, filename, path, bug_report_id, uploaded_at) FROM '$$PATH$$/3666.dat';

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, email, password, "roleId") FROM stdin;
\.
COPY public."user" (id, username, email, password, "roleId") FROM '$$PATH$$/3658.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, password, roleid) FROM stdin;
\.
COPY public.users (id, username, email, password, roleid) FROM '$$PATH$$/3656.dat';

--
-- Name: bug_report_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bug_report_id_seq', 1, false);


--
-- Name: bug_report_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bug_report_id_seq1', 1, false);


--
-- Name: bugrep_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bugrep_id_seq', 26, true);


--
-- Name: file_upload_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.file_upload_id_seq', 1, false);


--
-- Name: file_uploads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.file_uploads_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 19, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: bug_report PK_2885f11af36e1f953136d36e05f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bug_report
    ADD CONSTRAINT "PK_2885f11af36e1f953136d36e05f" PRIMARY KEY (id);


--
-- Name: file_upload PK_bb8460e39fcad3aaa44d1d7e5d3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.file_upload
    ADD CONSTRAINT "PK_bb8460e39fcad3aaa44d1d7e5d3" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: user UQ_78a916df40e02a9deb1c4b75edb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);


--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- Name: bugreport bug_report_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT bug_report_pkey PRIMARY KEY (id);


--
-- Name: bugrep bugrep_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bugrep
    ADD CONSTRAINT bugrep_pkey PRIMARY KEY (id);


--
-- Name: file_uploads file_uploads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.file_uploads
    ADD CONSTRAINT file_uploads_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: bugreport bug_report_assignee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT bug_report_assignee_id_fkey FOREIGN KEY (assignee_id) REFERENCES public.users(id);


--
-- Name: bugreport bug_report_reporter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT bug_report_reporter_id_fkey FOREIGN KEY (reporter_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               